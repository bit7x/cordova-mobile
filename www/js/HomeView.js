// To Remove the Hassel We Use a seperate JS File to bootstrap the UI

var HomeView = function (service){

  var employeeListView;

  this.initialize = function () {

    this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        employeeListView = new EmployeeListView();
        this.render();

  };
}
