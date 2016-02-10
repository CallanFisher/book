MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <li>
        <br><b> Language: </b>{this.props.skill.name}</br>
        <b> Time Spent: </b>{this.props.skill.time}
      </li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card blue darken-4">
        <div className="card-content white-text">
        <span class="card-title"> Different Skills </span>
        <ul>
          {skillElements}
        </ul>
        </div>
      </div>
    );
  }
});
