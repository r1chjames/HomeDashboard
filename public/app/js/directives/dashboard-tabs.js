var app = angular.module("dbt", []);

app.directive("dashboardTabs", function() {
  return {
    restrict: "E",
    template: "dashboard-tabs.html"
  };
});