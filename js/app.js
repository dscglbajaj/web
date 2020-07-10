const eventsShow = document.getElementById("eventsShow");
const oldEvents = document.getElementById('oldEvents');


$(function () {
    const baseUrl = "//dsccu.in/";

    fetch(`${baseUrl}newEvents.json`)
        .then(res => res.json())
        .then((docs) => {
            if (docs.length == 0) {
                eventsShow.innerHTML = '<div class="center"> <p style="padding:5px;margin-top:20px">There is no any event under Developer Student Clubs now and we are planning something new for you, Suggest Us Something at <a href="mailto:dsc@cumail.in?subject=Event Idea" aria-label="Footer Contents" rel="noopener"> dsc@cumail.in </a></p></div>';
            } else {
                docs.forEach(doc => {
                    showEvents(doc);
                    document.getElementById("loader").style = "display:none";
                });
            }
        });

    fetch(`${baseUrl}oldEvents.json`)
        .then(res => res.json())
        .then((docs) => {
            if (docs.length == 0) {
                oldEvents.innerHTML = '<div class="center"> <p style="padding:5px">There is no any event under Developer Student Clubs now and we are planning something new for you, Suggest Us Something at <a href="mailto:dsc@cumail.in?subject=Event Idea" aria-label="Footer Contents" rel="noopener"> dsc@cumail.in </a></p></div>';
            } else {
                docs.forEach((doc, index) => {
                    oldEvent(doc, index % 2);
                    document.getElementById("loaderOld").style = "display:none";
                });
            }
        });
});





const showEvents = (doc) => {
    const outerElement = document.createElement('div');
    const outerDetail = document.createElement('div');
    const image = document.createElement('img');
    const innerDiv = document.createElement('div');
    const level = document.createElement('p');
    const title = document.createElement('h5');
    const details = document.createElement('p');
    const link = document.createElement('a');

    outerElement.className = "col s12 m4";
    outerDetail.className = "custcard event-card";
    image.className = "custcard-img-top";
    innerDiv.className = "custcard-body";
    level.className = "tagging right " + doc.level;
    title.classList = "custcard-title";
    details.className = "custcard-text";
    link.className = "btn btncustom right border-radius z-depth-2 btn-small waves-effect waves-light";

    image.src = doc.image;
    image.alt = doc.title + " Event Image";
    level.textContent = doc.level;
    title.innerHTML = doc.title;
    details.innerHTML = `<strong>DATE :</strong> ${doc.date}<br> <strong> VENUE: </strong> ${doc.venue}<br> <strong> TIME: </strong> ${doc.time}`;
    link.href = doc.link;
    link.innerHTML = "Attend";
    link.setAttribute('aria-label', "Register for event " + doc.title);
    link.rel = "noopener";

    innerDiv.appendChild(level);
    innerDiv.appendChild(title);
    innerDiv.appendChild(details);
    innerDiv.appendChild(link);
    outerDetail.appendChild(image);
    outerDetail.appendChild(innerDiv);
    outerElement.appendChild(outerDetail);
    eventsShow.appendChild(outerElement);
};

const oldEvent = (doc, alternative) => {
    const outerDiv = document.createElement('div');
    const innerRow = document.createElement('div');
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    const detailsDiv = document.createElement('div');
    const title = document.createElement('h2');
    const line = document.createElement('hr');
    const details = document.createElement('div');
    const photosDiv = document.createElement('div');
    const imageLink = document.createElement('a');

    outerDiv.className = "col s12";
    innerRow.className = "row";
    imageDiv.className = (!alternative) ? "col m6 s12 center-on-small-only" : "col push-m6 push-m1 m6 s12 center-on-small-only";
    image.className = "responsive-img";
    detailsDiv.className = (!alternative) ? "col push-m1 m5 s12" : "col pull-m6 m5 s12";
    photosDiv.className = "memberbuttondiv";
    imageLink.className = "past-event waves-effect waves-light";

    image.src = doc.image;
    image.alt = doc.title;
    title.innerHTML = doc.title;
    details.innerHTML = `<h6>DATE : ${doc.date} </h6> <h6> VENUE: ${doc.venue} </h6> <p> ${doc.desc} </p>`;
    imageLink.href = doc.link;
    imageLink.textContent = "Event Photos";
    imageLink.setAttribute('aria-label', 'View Photos');
    imageLink.rel = "noopener";

    photosDiv.appendChild(imageLink);
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(line)
    detailsDiv.appendChild(details);
    detailsDiv.appendChild(photosDiv);
    imageDiv.appendChild(image);
    innerRow.appendChild(imageDiv);
    innerRow.appendChild(detailsDiv);
    outerDiv.appendChild(innerRow);
    oldEvents.appendChild(outerDiv);
};
