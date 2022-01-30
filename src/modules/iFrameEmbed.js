import React from 'react';
import { renderHTML } from '../agility/utils'

const IframeEmbed = ({ item }) => {

    return (
        <section>
            <div dangerouslySetInnerHTML={renderHTML(item.customFields.iFrame)}></div>
        </section>
    );
}

export default IframeEmbed;