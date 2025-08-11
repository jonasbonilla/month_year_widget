/** @odoo-module **/

import { Component, onWillUpdateProps, useState } from "@odoo/owl";

import { _t } from "@web/core/l10n/translation";
import { formatDate, deserializeDate, today } from "@web/core/l10n/dates";
import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";

const { DateTime } = luxon;

export class MonthYearField extends Component {
    setup() {
        const value = this.props.record.data[this.props.name];
        this.state = useState({
            value: this.getValue(value),
        });

        onWillUpdateProps((nextProps) => {
            const oldValue = this.props.record.data[this.props.name];
            const nextValue = nextProps.record.data[this.props.name];
            if (oldValue !== nextValue) {
                this.state.value = this.getValue(nextValue);
            }
        });
    }

    onChange(ev) {
        const newDate = this.getValue(ev.target.value);
        this.state.value = newDate;
        this.props.record.update({
            [this.props.name]: newDate,
        });
    }

    getValue(value) {
        let newDate = null;
        if (value) {
            if (value.isLuxonDateTime) {
                newDate = value;
            } else {
                const [year, month] = value.toString().split("-");
                if (!isNaN(year) && !isNaN(month)) {
                    newDate = DateTime.local(Number(year), Number(month), 1);
                }
            }
        }
        return !newDate?.isValid ? null : newDate;
    }

    getFormattedValue() {
        return this.state.value
            ? this.state.value.toFormat("LLLL yyyy")
            : "";
    }
}

MonthYearField.props = {
    ...standardFieldProps,
    placeholder: { type: String, optional: true },
    required: { type: Boolean, optional: true },
};

MonthYearField.template = "month_year_widget.MonthYearField";

export const MonthYearFieldWidget = {
    component: MonthYearField,
    displayName: _t("Month / Year"),
    supportedTypes: ["date", "datetime"],
    extractProps: ({ attrs }) => ({
        placeholder: attrs.placeholder,
    }),
};

registry.category("fields").add("month_year", MonthYearFieldWidget);