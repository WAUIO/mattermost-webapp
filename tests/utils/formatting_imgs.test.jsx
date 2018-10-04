// Copyright (c) 2015-present WAU Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import assert from 'assert';

import * as Markdown from 'utils/markdown';

describe('Markdown.Imgs', function() {
    it('Inline mage', function(done) {
        assert.equal(
            Markdown.format('![WAU Chat](/images/icon.png)').trim(),
            '<p><img src="/images/icon.png" alt="WAU Chat" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with hover text', function(done) {
        assert.equal(
            Markdown.format('![WAU Chat](/images/icon.png "WAU Chat Icon")').trim(),
            '<p><img src="/images/icon.png" alt="WAU Chat" title="WAU Chat Icon" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with link', function(done) {
        assert.equal(
            Markdown.format('[![WAU Chat](../../images/icon-76x76.png)](https://github.com/mattermost/platform)').trim(),
            '<p><a class="theme markdown__link" href="https://github.com/mattermost/platform" rel="noreferrer" target="_blank"><img src="../../images/icon-76x76.png" alt="WAU Chat" class="markdown-inline-img"></a></p>'
        );

        done();
    });

    it('Image with width and height', function(done) {
        assert.equal(
            Markdown.format('![WAU Chat](../../images/icon-76x76.png =50x76 "WAU Chat Icon")').trim(),
            '<p><img src="../../images/icon-76x76.png" alt="WAU Chat" title="WAU Chat Icon" width="50" height="76" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with width', function(done) {
        assert.equal(
            Markdown.format('![WAU Chat](../../images/icon-76x76.png =50 "WAU Chat Icon")').trim(),
            '<p><img src="../../images/icon-76x76.png" alt="WAU Chat" title="WAU Chat Icon" width="50" class="markdown-inline-img"></p>'
        );

        done();
    });
});
