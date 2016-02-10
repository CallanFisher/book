MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="card blue darken-4">
        <div className="card-content white-text">
          <div className="row">
            <div className="col s3">
              <img class="materialboxed" width="100" src="React_pic.jpg"></img>
            </div>

            <div className="col s7">
              <ul>
                <li><b>Name: </b> Callan Fisher </li>
                <li><b>Major: </b> Computer Science with a Minor in Econmoics </li>
                <li><b>Year: </b> 5th Year </li>
                <li><b>Birth Place: </b> San Jose California </li>
                <li><b>Github : </b><a href="https://github.com/CallanFisher">github.com/CallanFisher</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
