// Copyright (c) 2015-present Silicon Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export function getIsWebrtcOpen(state) {
    return state.views.webrtc.isOpen;
}

export function getIsBusy(state) {
    return state.views.webrtc.isBusy;
}
