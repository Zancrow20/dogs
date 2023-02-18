import { Card } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

//let history = useHistory();

export const DogInfoPage = ({doggy}) => {
    return <div style={{display: "flex",
    flex: 1,
    rowGap: 10,
    columnGap: 10,
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "row",
    flexWrap: "wrap"}}>
        <Card style={{width: 300,
            height: 500}}
            cover={  
                <img
                  alt={doggy.name}
                  src={doggy.image.url}>
                </img>}>
            <Meta title={doggy.name} li/>
            <h4> weight in metrics: { doggy.weight.metric } </h4> 
            <h4> height in metrics: { doggy.height.metric } </h4> 
            <h4> live for { doggy.life_span } </h4>
        </Card>
            {/*<button onClick={() => history.goBack()}>Back</button>*/}
    </div>
}