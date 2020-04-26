import React from 'react';
import BlockText from '../components/molecules/blockText';
import Text from '../components/atoms/text';

export const Default = () => <BlockText />;
export const Custom = () => (
    <BlockText width="500px" >
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices ac odio eget congue. Quisque vitae ipsum aliquet, pulvinar odio venenatis, ornare leo. Sed vitae ex libero. Nullam nec orci volutpat eros malesuada ultrices non vitae nunc." />
        <Text text="Cras et vestibulum mauris, at posuere mauris. Proin ullamcorper, nisi ac tincidunt dapibus, nisi elit ultricies arcu, interdum vulputate nunc orci quis risus. Quisque elementum gravida fermentum. Vivamus interdum ligula ut placerat interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vitae mollis mi." />
    </BlockText>
);
