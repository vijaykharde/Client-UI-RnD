import React from 'react';

import './EarlyRedemption.css';
import { connect } from 'react-redux';
interface Props {
    name: string;
}
const EarlyRedemption: React.FC<Props> = (props) => {
    console.log(props);
    const cols = [];

    /*for (let i = 1; i < 25; i++) {
        const col = (
            <div key={i} className="p-col">
                <div className={`box p-shadow-${i}`}>
                    p-shadow-{i}
                </div>
            </div>
        );

        cols.push(col);
    }*/

    return (
        <div className="p-grid">
            <div className="p-col">
                <div className={`box p-shadow-24`}>
                    p-shadow-24
                </div>
            </div>
        </div>
    );
}
export default connect(null)(EarlyRedemption);