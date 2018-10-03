// Copyright (c) 2015-present WAU Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';

import PermissionsTree from './permissions_tree.jsx';

function mapStateToProps(state) {
    const config = getConfig(state);

    return {
        config,
    };
}

export default connect(mapStateToProps)(PermissionsTree);
