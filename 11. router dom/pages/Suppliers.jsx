import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";

const Suppliers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://northwind.vercel.app/api/suppliers");
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          {Array.from(new Array(15)).map((item, index) => (
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          {data?.map((item) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1699936190858-4e90c09ae47a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Company Name: {item?.companyName}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Contact Name: {item?.contactName}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Contact Title: {item?.contactTitle}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Street: {item?.address?.street}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  City: {item?.address?.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Region: {item?.address?.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {item?.address?.phone}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button
                  size="small"
                  onClick={() => navigate(`/suppliers/${item?.id}`)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Suppliers;
