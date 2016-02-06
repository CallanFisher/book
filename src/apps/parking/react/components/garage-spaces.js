MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card blue darken-4">
        <div className="card-content white-text">
          <br>Open:  {this.props.open}</br>
          Total:  {this.props.total}
        </div>
      </div>
    );
  }
});
