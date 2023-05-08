import { $t } from '@/locales'

export const ruleRequired = {
	required: true,
	errorMessage: $t("REQUIRED")
};

export default {
	lastName: {
		rules: [ruleRequired],
	},
	firstName: {
		rules: [ruleRequired],
	},
	middleName: {
		rules: [ruleRequired],
	},
	phone: {
		rules: [
			ruleRequired,
			{
				format: "number",
				errorMessage: $t("MUST_NUMBER"),
			},
			{
				minimum: 999999999,
				errorMessage: $t("MUST_MORE_THAN_10_DIGISTS"),
			},
		],
	},
	walletPassword: {
		rules: [ruleRequired]
	},
	bankName: {
		rules: [ruleRequired]
	},
	username: {
		rules: [ruleRequired]
	},
	password: {
		rules: [
			ruleRequired,
			{
				validateFunction: (rule,value,data,callback) => {
					// console.log(data, data.password);
					if (value !== data.passwordConfirm) {
						callback($t("MUST_SAME_WITH_PASSWORD"));
					}
					return true;
				}
			}
		]
	},
	passwordConfirm: {
		rules: [
			ruleRequired,
			{
				validateFunction: (rule,value,data,callback) => {
					if (value !== data.password) {
						callback($t("MUST_SAME_WITH_PASSWORD"));
					}
					return true;
				}
			}
		]
	}
}