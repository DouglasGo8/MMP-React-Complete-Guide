import MeetupList from "../components/meetups/MeetupList";

const DUMMY = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/03/rsz_japan-osaka-city-aerial-skyline-skyscrapers-city-streets-e1489608405452.jpg",
    address: "Some Osaka address",
    description: "This is a first international Meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://theplanetd.com/images/places-to-visit-in-berlin-germany.jpg",
    address: "Some Berlin address",
    description: "This is a Second international Meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY} />;
};

export default HomePage;
