function Hour(props) {

  const info = "tietoaa ja muuta asiaa";
  return (
    React.createElement("div", { className: "hour" },
    React.createElement("div", { className: "timeHour" }, props.timeHour),
    React.createElement("textarea", { id: "info" })));


}

class Submit extends React.Component {
  render() {

    return (
      React.createElement("div", { className: "SubmitArea" },
      React.createElement("button", { className: "SubmitButton", onclick: "ButtonClick" }, "Submit"),
      React.createElement("p", { id: "changes" })));


  }
  ButtonClick() {
    //Submit...
  }}



class Table extends React.Component {
  renderHour(i) {
    return (
      React.createElement(Hour, {
        timeHour: this.props.hours[i] }));


  }

  render() {
    //const date = new Date();
    const day = this.props.date + "." + this.props.month;

    return (
      React.createElement("div", null,
      React.createElement("div", { className: "day" }, day),
      React.createElement("div", { className: "timeline" },
      React.createElement("div", null,
      this.renderHour(0)),

      React.createElement("div", null,
      this.renderHour(1)),

      React.createElement("div", null,
      this.renderHour(2)),

      React.createElement("div", null,
      this.renderHour(3)),

      React.createElement("div", null,
      this.renderHour(4)),

      React.createElement("div", null,
      this.renderHour(5)),

      React.createElement("div", null,
      this.renderHour(6)),

      React.createElement("div", null,
      this.renderHour(7)),

      React.createElement("div", null,
      this.renderHour(8)),

      React.createElement("div", null,
      this.renderHour(9)),

      React.createElement("div", null,
      this.renderHour(10)),

      React.createElement("div", null,
      this.renderHour(11)),

      React.createElement("div", null,
      this.renderHour(12)))));




  }}


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: Array(9).fill(null) };

  }

  render() {
    const hours = ["08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00",
    "20:00"];
    const currentDate = new Date();
    const tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const datDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2);
    const today = currentDate.getDate();
    const tomorrow = tomorrowsDate.getDate();
    const dat = datDate.getDate();
    const cumonth = currentDate.getMonth() + 1;
    const tomonth = currentDate.getMonth() + 1;
    const datmonth = currentDate.getMonth() + 1;

    return (
      React.createElement("div", { className: "calendar" },
      React.createElement("div", { className: "day" },
      React.createElement(Table, {
        hours: hours,
        date: today,
        month: cumonth })),


      React.createElement("div", { className: "day" },
      React.createElement(Table, {
        hours: hours,
        date: tomorrow,
        month: tomonth })),


      React.createElement("div", { className: "day" },
      React.createElement(Table, {
        hours: hours,
        date: dat,
        month: datmonth })),


      React.createElement("div", { className: "Submit" },
      React.createElement(Submit, null))));




  }}


// _______________________________

ReactDOM.render(
React.createElement(Calendar, null),
document.getElementById("root"));