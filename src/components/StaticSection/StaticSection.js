import { SectionStatic, TitleText } from "./StaticSection.styled";
    export const StaticSection = ({ title, stats }) => {
        return (
          <SectionStatic>
            {title && <TitleText>{title}</TitleText>}
            <ul>
              {stats.map(({ id, label, percentage }) => (
                <li key={id}>
                  <span>{label}</span>
                  <span>{percentage}%</span>
                </li>
              ))}
            </ul>
          </SectionStatic>
        );
      };