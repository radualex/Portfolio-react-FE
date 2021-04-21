import React, { useState } from "react";
import axios from "axios";
import "./Work.scoped.scss";

import { Container } from "../Container/Container";
import { WorkItem } from "../WorkItem/WorkItem";

// TODO: after creating the type, adjust all these 'anys'
export const Work = () => {
  const [data, setData] = useState([]);

  const mapData = (data: Array<any>): any => {
    return data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        title: item.title,
        year: item.year,
        description: item.description,
        picture: `${process.env.REACT_APP_API_URL}${
          item.picture.formats.thumbnail.url
        }`,
      };
    });
  };

  React.useEffect(() => {
    // TODO: move API calls to a separate file and export. (i.e. api.ts)
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/projects`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
          },
        }
      );

      setData(mapData(response.data));
    };

    fetchData();
  }, []);

  return data.length !== 0 ? (
    <Container classNames="gap-24" height="auto">
      {data.map((item: any) => (
        <WorkItem
          key={`WorkItem-${item.id}`}
          title={item.title}
          year={item.year}
          name={item.name}
          description={item.description}
          picture={item.picture}
        />
      ))}
    </Container>
  ) : null;
};
