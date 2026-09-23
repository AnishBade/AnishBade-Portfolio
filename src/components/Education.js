import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Education extends Component {
  render() {
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var education = this.props.resumeEducation.map(function (item, i) {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={item.period}
            iconStyle={{
              background: "#0d6efd",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-graduation-cap experience-icon"></i>}
            key={i}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {item.degree}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {item.institution}
            </h4>
            <p style={{ textAlign: "left", marginTop: "15px", marginBottom: 0 }}>
              {item.location}
            </p>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="education" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {education}
            <VerticalTimelineElement
              iconStyle={{
                background: "#0d6efd",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
