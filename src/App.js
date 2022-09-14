//Import everything needed to use the `useQuery` hook

import { useQuery, gql } from "@apollo/client";

export default function App() {
  return (
    <div>
      <h2>My first Apollo App 🚀</h2>
      <br />
      <DisplayLocations />
    </div>
  );
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}
