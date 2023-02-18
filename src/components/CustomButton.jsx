export const CustomButton = ({value, onClick}) => {


    /* const obj = {
        id:1,
        name:"Sasha"
    };

    const {id} = obj; */

    return <button onClick={onClick}>{value}</button>
};

export default CustomButton;