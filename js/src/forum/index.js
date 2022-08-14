import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import TextEditor from 'flarum/common/components/TextEditor';
import TextEditorButton from 'flarum/common/components/TextEditorButton';
import insertAtCursor from './BBCode';
import insertAtCursor2 from './BBCode2';
import insertAtCursor3 from './BBCode3';

app.initializers.add('zerosonesfun/bbcode-button', () => {

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
      if (app.forum.attribute('zerosonesfun-bbcode-button.code') === "") {
        return; } else {
        items.add(
          'bbcode',
          <TextEditorButton onclick={() => insertAtCursor()} icon={app.forum.attribute('zerosonesfun-bbcode-button.icon')}>
            {app.translator.trans('flarum-bbcode-button.forum.composer.bbcode_tooltip')}
          </TextEditorButton>
        ); }
        if (app.forum.attribute('zerosonesfun-bbcode-button.code2') === "") {
          return; } else {
        items.add(
          'bbcode2',
          <TextEditorButton onclick={() => insertAtCursor2()} icon={app.forum.attribute('zerosonesfun-bbcode-button.icon2')}>
            {app.translator.trans('flarum-bbcode-button.forum.composer.bbcode_tooltip2')}
          </TextEditorButton>
        ); }
        if (app.forum.attribute('zerosonesfun-bbcode-button.code3') === "") {
        return; } else {
        items.add(
          'bbcode3',
          <TextEditorButton onclick={() => insertAtCursor3()} icon={app.forum.attribute('zerosonesfun-bbcode-button.icon3')}>
            {app.translator.trans('flarum-bbcode-button.forum.composer.bbcode_tooltip3')}
          </TextEditorButton>
        ); }
      });
});