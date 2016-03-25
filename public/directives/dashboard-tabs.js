var app = angular.module("HomeAutoApp", []);

app.directive("dashboardTabs", function() {
  return {
    restrict: "E",
    template: "dashboard-tabs.html"
  };
});