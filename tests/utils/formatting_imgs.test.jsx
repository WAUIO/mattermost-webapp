// Copyright (c) 2015-present Silicon Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import assert from 'assert';

import * as Markdown from 'utils/markdown';

describe('Markdown.Imgs', function() {
    it('Inline mage', function(done) {
        assert.equal(
            Markdown.format('![Silicon Chat](/images/icon.png)').trim(),
            '<p><img src="/images/icon.png" alt="Silicon Chat" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with hover text', function(done) {
        assert.equal(
            Markdown.format('![Silicon Chat](/images/icon.png "Silicon Chat Icon")').trim(),
            '<p><img src="/images/icon.png" alt="Silicon Chat" title="Silicon Chat Icon" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with link', function(done) {
        assert.equal(
            Markdown.format('[![Silicon Chat](../../images/icon-76x76.png)](https://github.com/mattermost/platform)').trim(),
            '<p><a class="theme markdown__link" href="https://github.com/mattermost/platform" rel="noreferrer" target="_blank"><img src="../../images/icon-76x76.png" alt="Silicon Chat" class="markdown-inline-img"></a></p>'
        );

        done();
    });

    it('Image with width and height', function(done) {
        assert.equal(
            Markdown.format('![Silicon Chat](../../images/icon-76x76.png =50x76 "Silicon Chat Icon")').trim(),
            '<p><img src="../../images/icon-76x76.png" alt="Silicon Chat" title="Silicon Chat Icon" width="50" height="76" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with width', function(done) {
        assert.equal(
            Markdown.format('![Silicon Chat](../../images/icon-76x76.png =50 "Silicon Chat Icon")').trim(),
            '<p><img src="../../images/icon-76x76.png" alt="Silicon Chat" title="Silicon Chat Icon" width="50" class="markdown-inline-img"></p>'
        );

        done();
    });
});
