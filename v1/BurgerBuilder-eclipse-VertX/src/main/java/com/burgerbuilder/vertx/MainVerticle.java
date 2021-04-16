
package com.burgerbuilder.vertx;

import java.util.function.Consumer;

import com.burgerbuilder.vertx.api.rest.BurgerBuilderVerticle;

import io.vertx.config.ConfigRetriever;
import io.vertx.config.ConfigRetrieverOptions;
import io.vertx.config.ConfigStoreOptions;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import io.vertx.core.json.JsonObject;

/**
 * @author dbatista
 */
public class MainVerticle {

  /**
   * @param args EntryPoint
   */
  public static void main(String[] args) {

    runVerticle(vertx -> ConfigRetriever.create(vertx, new ConfigRetrieverOptions() {
      {
        addStore(new ConfigStoreOptions() {
          {
            setType("file");
            setConfig(new JsonObject().put("path", "./src/main/resources/config.json"));
          }
        });
      }
    }).getConfig(ar -> {
      if (ar.failed()) {
        throw new IllegalArgumentException(ar.cause());
      } else {
        vertx.deployVerticle(BurgerBuilderVerticle.class.getName(),
                new DeploymentOptions().setConfig(ar.result()));
      }
    }));
  }

  /**
   * @param runner EntryPoint
   */
  public static void runVerticle(final Consumer<Vertx> runner) {
    runner.accept(Vertx.vertx(new VertxOptions()));
  }
}