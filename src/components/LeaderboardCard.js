import React from 'react'
import classNames from 'classnames';

const styles = {
    container: {
        backgroundColor: '#232323',
        color: 'white'
    },
    titleContainer: {
        borderBottom: '1px solid #f20089',
        color: '#f20089'
    },
    info: {
        fontSize: '1.5em',
        textAlign: 'center'
    },
    name: {
        fontSize: '1.3em',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    level: {
        fontSize: '0.75em',
        textTransform: 'uppercase'
    }
}

const LeaderboardCard = ({ data }) => {

    const { rank, fullName, level, points } = data;

    const containerClassnames = classNames({
        "container w-11/12 sm:w-8/12 h-20 my-2 mx-auto flex flex-row justify-evenly items-center shadow-xl": true,
        "w-full sm:w-full mt-0  h-24 bg-black ": rank === "RANK",
        "sm:w-11/12 h-28": rank === "1",
        "sm:w-10/12 h-24": rank === "2",
        "sm:w-9/12 h-20": rank === "3",
    });

    return (
        <div className={containerClassnames} style={rank === "RANK" ? styles.titleContainer : styles.container}>
            <h6 style={styles.info}>{rank}</h6>
            <div className="container w-2/6 flex flex-col items-center">
                <h6 style={styles.name}>{fullName}</h6>
                <p style={styles.level}> {level}</p>
            </div>
            <h6 style={styles.info}>{points}</h6>
        </div>
    )
}

export default LeaderboardCard