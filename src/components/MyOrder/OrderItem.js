import React, { useContext } from "react";
import { UserCookie } from "../../hooks/UserCookie";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import TimePicker from "./TimePicker";
import UserCard from "./UserCard";
import ClientButton from "./Button/ClientButton";
import ContractorButton from "./Button/ContractorButton";
import Status from "./Status";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "box-content",
    flexGrow: 1,
    marginBottom: "1em",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 900,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "10em",
    height: "10em",
    borderRadius: "5em",
  },
}));

export default function OrderItem(props) {
  const { state, setState } = useContext(UserCookie);
  const classes = useStyles();
  const { order, otherOrders } = props;
  const orderDate = order.order_date;
  const disabledDate = otherOrders.map((order) => new Date(order.order_date));

  const onConfirm = (order, option) => {
    const id = order.id;
    const updateOrder = { id, status: "confirmed", ...option };
    const orders = [...state.orders].map((item) => {
      return item.id === updateOrder.id ? {...item, ...updateOrder} : item;
    });
    console.log(orders);
    axios
      .patch(`/api/orders/${id}`, updateOrder)
      .then((res) => {
        setState({ ...state, orders })
      })
      .catch((err) => console.log(err));
  };
  const onComplete = (order, option) => {
    const id = order.id;
    const updateOrder = { id, status: "completed", ...option };
    const orders = [...state.orders].map((item) => {
      return item.id === updateOrder.id ? {...item, updateOrder} : item;
    });
    console.log(orders);
    axios
      .patch(`/api/orders/${id}`, updateOrder)
      .then((res) => {
        setState({ ...state, orders })
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3} justify="center">
            <img
              className={classes.img}
              alt="complex"
              src={order.gig.photo_one}
            />
          </Grid>
          <Grid item container direction="column" xs={7} alignItems="center">
            <CardHeader title={order.gig.title} />
            <TimePicker orderDate={orderDate} disabledDate={disabledDate} />
            <UserCard user={props.user} role={props.role} />
          </Grid>
          <Grid item xs={2} container direction="column" justify="center">
            <Status order={order} />
            {props.role !== "Client" && <ClientButton order={order} />}
            {props.role !== "Contractor" && (
              <ContractorButton
                order={order}
                onConfirm={() => onConfirm(order)}
                onComplete={() => onComplete(order)}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
