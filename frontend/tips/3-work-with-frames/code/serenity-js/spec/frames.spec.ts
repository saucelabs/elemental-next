import { describe, it } from '@serenity-js/playwright-test';

import { Ensure, equals, not } from '@serenity-js/assertions';
import { notes } from '@serenity-js/core';
import { By, Clear, Enter, Navigate, PageElement, Switch, Text } from '@serenity-js/web';

describe('Frames', () => {

    describe('Example 1', () => {

        const frames = {
            top:     PageElement.located(By.css('[name="frame-top"]')),
            middle:  PageElement.located(By.css('[name="frame-middle"]')),
            content: PageElement.located(By.id('content')),
        };

        it('works with nested frames', async ({ actor }) => {

            await actor.attemptsTo(
                Navigate.to('https://the-internet.herokuapp.com/nested_frames'),
                Switch.to(frames.top).and(
                    Switch.to(frames.middle).and(
                        Ensure.that(Text.of(frames.content), equals('MIDDLE')),
                    ),
                ),
            );

        });
    });

    describe('Example 2', () => {

        interface EditorText {
            before: string;
            after:  string;
        }

        const tinyMceComponent = {
            heading: PageElement.located(By.css('h3')),
            frame:   PageElement.located(By.id('mce_0_ifr')),
            editor:  PageElement.located(By.id('tinymce')),
        }

        it('works with a TinyMCE WYSIWYG Editor', async ({ actor }) => {

            await actor.attemptsTo(
                Navigate.to('https://the-internet.herokuapp.com/tinymce'),
                Switch.to(tinyMceComponent.frame).and(
                    notes<EditorText>().set('before', Text.of(tinyMceComponent.editor)),

                    Clear.theValueOf(tinyMceComponent.editor),
                    Enter.theValue('Hello World!').into(tinyMceComponent.editor),
                    notes<EditorText>().set('after', Text.of(tinyMceComponent.editor)),

                    Ensure.that(notes<EditorText>().get('before'), not(equals(notes<EditorText>().get('after')))),
                    Ensure.that(notes<EditorText>().get('before'), equals('Your content goes here.')),
                    Ensure.that(notes<EditorText>().get('after'), equals('Hello World!')),
                ),
                Ensure.that(Text.of(tinyMceComponent.heading), equals('An iFrame containing the TinyMCE WYSIWYG Editor')),
            );
        });
    });
});
