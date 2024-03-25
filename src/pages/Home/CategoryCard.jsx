import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
const CategoryCard = ({data}) => {
    const {availability,logo,category_name}=data||{}
    return (
        <Card className="  bg-gray-200 ">
            <CardBody className="space-y-3 p-6 h-44 ">
               <img src={logo} alt="" />
                <Typography variant="h5" color="blue-gray" className="mb-2 pt-2">
                    {category_name}
                </Typography>
                <Typography>
                   {availability}
                </Typography>
            </CardBody>
            
        </Card>
    );
};

export default CategoryCard;