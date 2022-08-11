import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatisticsTitle, StatisticsList, StatisticsListItem } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Box
            as="section"
            bg="maybeYellow"
            border="normal"
            borderRadius="sm"
            borderColor="almostDarkGreen"
            textAlign="center"
            boxShadow="shadow"
        >
            {title && <StatisticsTitle>{title}</StatisticsTitle>}
            <StatisticsList>
                {stats.map((stat) => {
                const { label, percentage, id } = stat;
            return (
                <StatisticsListItem key={id}>
                    <span>{label}</span>
                    <span>{percentage}</span>
                </StatisticsListItem>)
            })}
        </StatisticsList>
    </Box>);
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};