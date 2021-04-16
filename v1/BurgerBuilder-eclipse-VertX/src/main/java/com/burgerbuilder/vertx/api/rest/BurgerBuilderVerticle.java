
package com.burgerbuilder.vertx.api.rest;

import java.util.HashSet;
import java.util.Set;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.ext.mongo.MongoClient;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.CorsHandler;

/**
 * @author dbatista
 */
public class BurgerBuilderVerticle extends AbstractVerticle {

    private MongoClient mongo;
    private static final String ORDER_COLLECTION = "OrderBurgerCollection";
    private static final String INGREDIENT_COLLECTION = "IngredientsCollection";

    private static final Logger logger = LoggerFactory.getLogger(BurgerBuilderVerticle.class);

    @Override
    public void start() {

        logger.info("*** BurgerBuilderVerticle Running ***");

        final Router router = Router.router(vertx);
        this.mongo = MongoClient.createShared(super.vertx, super.config());

        /**
         * Must enable before of router.post to handle POST bodies
         */
        router.route().handler(BodyHandler.create());

        router.route("/api/greeting").handler(this::greeting);
        router.post("/api/add/burger/order").handler(this::addBurgerOrder);
        router.get("/api/ingredients").handler(this::getIngredients);

        final Set<String> allowedHeaders = new HashSet<>();

        allowedHeaders.add("x-requested-with");
        allowedHeaders.add("Access-Control-Allow-Origin");
        allowedHeaders.add("origin");
        allowedHeaders.add("Content-Type");
        allowedHeaders.add("accept");

        router.route().handler(CorsHandler.create("*").allowedMethod(HttpMethod.POST).allowedHeaders(allowedHeaders));

        super.vertx.createHttpServer().requestHandler(router).listen(super.config().getInteger("http.port", 8080),
                ar -> {
                    if (ar.succeeded()) {
                        logger.info("Server is now listening!");
                    } else {
                        logger.info(String.format("fail %s", ar.cause()));
                    }
                });

    }

    @Override
    public void stop() throws Exception {
        this.mongo.close();
    }

    /**
     * 
     * @param routingContext
     */
    private void greeting(RoutingContext routingContext) {
        routingContext
            .response()
            .setStatusCode(200)
            .putHeader("content-type", "application/json; charset=utf-8")
            .putHeader("Access-Control-Allow-Origin", "*")
            .end(Json.encodePrettily(new JsonObject().put("message", "Hello Burger Builder from VertX")));
    }
    /**
     * 
     * @param routingContext
     */
    private void addBurgerOrder(RoutingContext routingContext) {
        try {
            final JsonObject json = routingContext.getBodyAsJson();
            // logger.info(orderBurger);
            this.mongo.insert(ORDER_COLLECTION, json, result -> {
                if (result.failed()) {
                    routingContext.response().setStatusCode(501)
                            .putHeader("content-type", "application/json; charset=utf-8")
                            .putHeader("Access-Control-Allow-Origin", "*")
                            .end(Json.encodePrettily(new JsonObject().put("message", result.cause())));
                } else {
                    routingContext.response().setStatusCode(201)
                            .putHeader("content-type", "application/json; charset=utf-8")
                            .putHeader("Access-Control-Allow-Origin", "*")
                            .end(Json.encodePrettily(new JsonObject().put("message", "Order Successfully added!")));
                }
            });
        } catch (Exception ex) {
            routingContext.response()
                .setStatusCode(501)
                .putHeader("content-type", "application/json; charset=utf-8")
                .putHeader("Access-Control-Allow-Origin", "*")
                .end(Json.encodePrettily(new JsonObject().put("msg", ex.toString())));
        }
    }

    /**
     *
     */
    private void getIngredients(RoutingContext routingContext) {

        this.mongo.find(INGREDIENT_COLLECTION, new JsonObject(), handler -> { 
            if (handler.failed()) {
                routingContext.response()
                    .setStatusCode(503)
                    .putHeader("content-type", "application/json; charset=utf-8")
                    .putHeader("Access-Control-Allow-Origin", "*")
                    .end(Json.encodePrettily(new JsonObject().put("msg", handler.cause())));
            } else {
                routingContext
                    .response()
                    .setStatusCode(200)
                    .putHeader("content-type", "application/json; charset=utf-8")
                    .putHeader("Access-Control-Allow-Origin", "*")
					.end(Json.encodePrettily(handler.result()));
            }
        });
    }

}