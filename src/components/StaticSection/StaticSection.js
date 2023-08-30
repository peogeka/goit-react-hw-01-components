import PropTypes from 'prop-types';
import { SectionStatic, TitleText, SectionList, SectionItem } from "./StaticSection.styled";
    export const StaticSection = ({ title, stats }) => {
        return (
          <SectionStatic>
            {title && <TitleText>{title}</TitleText>}
            <SectionList>
              {stats.map(({ id, label, percentage }) => (
                <SectionItem key={id}>
                  <span>{label}</span>
                  <span>{percentage}%</span>
                </SectionItem>
              ))}
            </SectionList>
          </SectionStatic>
        );
      };

      StaticSection.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(PropTypes.object).isRequired,
      };