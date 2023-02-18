import React, { useContext } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import styles from "./DogsContainer.module.sass";
import  setId  from "../../App.js";
import { DogContext } from "../../context"

const { Meta } = Card;


export const DogsFlexContainer = ({dogData}) => {
  const { onDogSelected } = useContext(DogContext)
  return (<div style={{display: "flex",
  flex: 1,
  rowGap: 10,
  columnGap: 10,
  alignItems: "center",
  justifyContent: "center", 
  flexDirection: "row",
  flexWrap: "wrap"}} 
  className={styles.container}>
    {dogData.map((dog) => {
      const doggyLink = `/${dog.id}`;
      return (<Link 
        to={doggyLink}
        onClick={() => onDogSelected(dog)}>
          <Card
            hoverable
            style={{width: 200,
            height: 300}}
            cover={  
                <img
                  alt={dog.name}
                  src={dog.image.url}>
                </img>}>
            <Meta title={dog.name} li/>
          </Card>
      </Link>);
    })}</div>);
}
