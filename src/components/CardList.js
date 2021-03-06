import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true) throw new Error('Something went wrong...')

    // const cardArrays = robots.map((user, i) => {
    //     return (
    //         <Card 
    //             id={ user.id } 
    //             name={ user.name } 
    //             email={ user.email } 
    //             key={ user.id } 
    //         />
    //     );
    // })

    // console.log(cardArrays)

    return (
        <div>
            {
                // cardArrays
                robots.map((user, i) => {
                    return (
                        <Card 
                            id={ user.id } 
                            name={ user.name } 
                            email={ user.email } 
                            key={ user.id } 
                        />
                    );
                })
            }
        </div>
    );

    // return (
    //     <div>
    //         <Card id={ robots[0].id } name={ robots[0].name } email={ robots[0].email } />
    //         <Card id={ robots[1].id } name={ robots[1].name } email={ robots[1].email } />
    //         <Card id={ robots[2].id } name={ robots[2].name } email={ robots[2].email } />
    //         <Card id={ robots[3].id } name={ robots[3].name } email={ robots[3].email } />
    //     </div>
    // );
};

export default CardList;