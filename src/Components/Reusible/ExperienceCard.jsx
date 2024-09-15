import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <div>
      <VerticalTimeline lineColor="#1d1836">
        <VerticalTimelineElement
          contentStyle={{ background: "#1d1836", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #232631" }}
          date={experience.date}
          iconStyle={{ background: experience.iconBg }}
          icon={
            <div>
              <img src={experience.icon} alt="" />
            </div>
          }
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {experience.title}
            </h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] p-1 tracking-wider "
              >
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceCard;
