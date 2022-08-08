import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        {stats.map(({ id, label, percentage }) => {
            return <ul className="stat-list">
                <li className="item" id={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
            </ul>
        })};
    </section>);
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};