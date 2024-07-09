$(document).ready(() => {
  let notification = $(".num-of-notifications");
  $(".read-all-btn").click(() => {
    $("section").removeClass("active");
    notification.hide();
  });
  $("section.active").click((e) => {
    let numOfClicks = 0;    
    if (e.target.className == "active posted") { $("section.posted").removeClass("active"); }
    else if (e.target.className == "active followed") { $("section.followed").removeClass("active"); }
    else if (e.target.className == "active joined-club") { $("section.joined-club").removeClass("active"); }
    notification.text(notification.text() - 1);
    console.log(notification.text());
    if (notification.text() == 0) {
      notification.hide();
    }
  });
});