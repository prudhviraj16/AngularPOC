import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[appInputRestriction]'
})

export class InputRestrictionDirective {
    inputElement: ElementRef;

    @Input('appInputRestriction') appInputRestriction: string = '';

    constructor(el: ElementRef, private ngControl: NgControl) {
        this.inputElement = el;
    }

    @HostListener('keypress', ['$event']) onKeyPress(event : KeyboardEvent) {
        if (this.appInputRestriction === 'integer') {
            this.integerOnly(event, this.appInputRestriction);
        } else if (this.appInputRestriction === 'letters') {
            this.letterOnly(event);
        }
    }

    integerOnly(event: KeyboardEvent, val: string) {
        const e = <KeyboardEvent>event;
        if (e.key.toLowerCase() === 'tab') {
            return;
        }
        if (['Delete', 'Backspace', 'Tab', 'Enter', 'Escape', 'Decimal Point'].indexOf(e.key) !== -1 ||
            // Allow: Ctrl+A
            (e.key === 'a' && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.key === 'c' && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.key === 'v' && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.key === 'x' && e.ctrlKey === true)) {
            // let it happen, don't do anything
            return;
        }

        if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key) === -1) {
            e.preventDefault();
        }
    }

    letterOnly(event: KeyboardEvent) {
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z ]/.test(inp)) {
            return true;
        } else {
            event.preventDefault();
            return false;
        }
    }

    @HostListener('focusout', ["$event.target"]) onFocusout(event: KeyboardEvent) {
        if (this.appInputRestriction === 'EmailRegex') {
            this.emailValidation(event);
        }
    }

    emailValidation(event: any) {
        let regex = /^[\w](?!.*\.\.)[\w.\-!~]{0,51}(?!.{51})([\w]\b@[a-zA-Z0-9]+(?:\.[a-zA-Z]+)*)$/g;
        var pattern = new RegExp(regex);
        var result
        if (event.value) {
            result = pattern.test(event.value);
            if (!result) {
                this.ngControl.control?.setErrors({ invalidEmail: true });
            } else {
                this.ngControl.control?.setErrors(null);
            }
        }
    }
}