import React, { useState } from 'react'
import data from '../DummyData.json'
import LeaderboardCard from './LeaderboardCard'

const styles = {
    container: {
        'backgroundColor': '#000',
        'border': '2px dotted #f20089'
    },
    title: {
        color: ' #f20089',
        textTransform: 'uppercase'
    },
    textContainer: {
        border: '4px dotted #f20089',
        borderRightStyle: 'none',
        borderLeftStyle: 'none'
    },
    searchBox: {
        backgroundColor: '#121212',
        color: '#f20089',
        borderTopStyle: 'none'
    }
}

const Leaderboard = () => {

    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(data);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = data.filter(function (item) {
                const userData = item.fullName
                    ? item.fullName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return userData.indexOf(textData) > -1;
            });
            setFilteredUsers(newData);
            setSearch(text);
        } else {
            setFilteredUsers(data);
            setSearch(text);
        }
    };

    return (
        <div className='bg-black h-full flex flex-col justify-center items-center'>
            <div className="w-8/12 flex justify-center py-5 mt-3 mb-16" style={styles.textContainer}>
                <h1 className="text-4xl font-extrabold" style={styles.title}>
                    Leaderboard
                </h1>
            </div>
            <div className="w-full h-screen flex flex-col justify-center items-center">
            <div class="shadow flex w-full md:w-8/12 mb-5" style={styles.searchBox}>
                <input
                    class="w-full p-3" type="text" placeholder="Search..." style={styles.searchBox}
                    onChange={(text) => searchFilterFunction(text.target.value)}
                />
            </div>
            <div className="container w-full lg:w-8/12 h-screen mb-10 flex-grow overflow-y-auto overscroll-contain"
                style={styles.container}>
                <div className="sticky top-0 z-50">
                    <LeaderboardCard data={{ rank: "RANK", fullName: "NAME", "level": "LEVEL", points: "POINTS" }} />
                </div>
                {
                    filteredUsers.map(element => {
                        return <LeaderboardCard key={element.rank} data={element} />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
