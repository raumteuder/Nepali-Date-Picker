calendarFunctions = {},
    function(e) {
        var a = {
                bsMonths: ["बैशाख", "जेठ", "असार", "सावन", "भदौ", "असोज", "कार्तिक", "मंसिर", "पौष", "माघ", "फागुन", "चैत"],
                bsDays: ["आईत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनि"],
                nepaliNumbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
                bsMonthUpperDays: [
                    [30, 31],
                    [31, 32],
                    [31, 32],
                    [31, 32],
                    [31, 32],
                    [30, 31],
                    [29, 30],
                    [29, 30],
                    [29, 30],
                    [29, 30],
                    [29, 30],
                    [30, 31]
                ],
                extractedBsMonthData: [
                    [0, 1, 1, 22, 1, 3, 1, 1, 1, 3, 1, 22, 1, 3, 1, 3, 1, 22, 1, 3, 1, 19, 1, 3, 1, 1, 3, 1, 2, 2, 1, 3, 1],
                    [1, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 3, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2],
                    [0, 1, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2],
                    [1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2, 2, 1, 3, 1, 2, 2, 2, 1, 2],
                    [59, 1, 26, 1, 28, 1, 2, 1, 12],
                    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 1, 2, 2, 1, 3, 1, 2, 1, 2],
                    [0, 12, 1, 3, 1, 3, 1, 5, 1, 11, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 27, 1, 2],
                    [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 15, 2, 4],
                    [0, 1, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 3, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 15, 2, 4],
                    [1, 1, 3, 1, 3, 1, 14, 1, 3, 1, 1, 1, 3, 1, 14, 1, 3, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 3, 1, 14, 1, 3, 15, 1, 2, 1, 1],
                    [0, 1, 1, 3, 1, 3, 1, 10, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1, 10, 1, 3, 1, 3, 1, 3, 1, 3, 1, 14, 1, 3, 1, 3, 1, 3, 1, 3, 1, 10, 1, 20, 1, 1, 1],
                    [1, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 20, 3]
                ],
                minBsYear: 1970,
                maxBsYear: 2100,
                minAdDateEqBsDate: {
                    ad: {
                        year: 1913,
                        month: 3,
                        date: 13
                    },
                    bs: {
                        year: 1970,
                        month: 1,
                        date: 1
                    }
                }
            },
            t = function(a) {
                e.each(a, function(e, t) {
                    if (null == t) throw new ReferenceError("Missing required parameters: " + Object.keys(a).join(", "))
                })
            },
            n = function(e) {
                if ("number" != typeof e || null === e) throw new TypeError("Invalid parameter bsYear value");
                if (e < a.minBsYear || e > a.maxBsYear) throw new RangeError("Parameter bsYear value should be in range of " + a.minBsYear + " to " + a.maxBsYear)
            },
            r = function(e) {
                if ("number" != typeof e || null === e) throw new TypeError("Invalid parameter adYear value");
                if (e < a.minBsYear - 57 || e > a.maxBsYear - 57) throw new RangeError("Parameter adYear value should be in range of " + (a.minBsYear - 57) + " to " + (a.maxBsYear - 57))
            },
            o = function(e) {
                if ("number" != typeof e || null === e) throw new TypeError("Invalid parameter bsMonth value");
                (e < 1 || e > 12) && console.log("Parameter bsMonth value should be in range of 1 to 12")
            },
            s = function(e) {
                if ("number" != typeof e || null === e) throw new TypeError("Invalid parameter adMonth value");
                if (e < 1 || e > 12) throw new RangeError("Parameter adMonth value should be in range of 1 to 12")
            },
            d = function(e) {
                if ("number" != typeof e || null === e) throw new TypeError("Invalid parameter bsDate value");
                if (e < 1 || e > 32) throw new RangeError("Parameter bsDate value should be in range of 1 to 32")
            },
            i = function(e) {
                if ("number" != typeof e || null === e) throw new TypeError("Invalid parameter adDate value");
                if (e < 1 || e > 31) throw new RangeError("Parameter adDate value should be in range of 1 to 31")
            },
            l = function(t) {
                e.each(t, function(e, n) {
                    if ("number" != typeof n || null === n || n < 0) throw new ReferenceError("Invalid parameters: " + Object.keys(t).join(", "));
                    if ("yearDiff" === e && n > a.maxBsYear - a.minBsYear + 1) throw new RangeError("Parameter yearDiff value should be in range of 0 to " + (a.maxBsYear - a.minBsYear + 1))
                })
            };
        e.extend(calendarFunctions, {
            getNepaliNumber: function(e) {
                if (void 0 === e) throw new Error("Parameter number is required");
                if ("number" != typeof e || e < 0) throw new Error("Number should be positive integer");
                var t = Math.floor(e / 10),
                    n = e % 10;
                return 0 !== t ? calendarFunctions.getNepaliNumber(t) + a.nepaliNumbers[n] : a.nepaliNumbers[n]
            },
            getNumberByNepaliNumber: function(e) {
                if (void 0 === e) throw new Error("Parameter nepaliNumber is required");
                if ("string" != typeof e) throw new Error("Parameter nepaliNumber should be in string");
                for (var t = 0, n = 0; n < e.length; n++) {
                    var r = a.nepaliNumbers.indexOf(e.charAt(n));
                    if (-1 === r) throw new Error("Invalid nepali number");
                    t = 10 * t + r
                }
                return t
            },
            getBsMonthInfoByBsDate: function(e, r, s, i) {
                if (t({
                    bsYear: e,
                    bsMonth: r,
                    bsDate: s
                }), n(e), o(r), d(s), null === i) i = "%D, %M %d, %y";
                else if ("string" != typeof i) throw new TypeError("Invalid parameter dateFormatPattern value");
                var l = calendarFunctions.getTotalDaysNumFromMinBsYear(e, r, s),
                    u = new Date(a.minAdDateEqBsDate.ad.year, a.minAdDateEqBsDate.ad.month, a.minAdDateEqBsDate.ad.date - 1);
                u.setDate(u.getDate() + l);
                var c = calendarFunctions.getAdDateByBsDate(e, r, 1),
                    b = calendarFunctions.getBsMonthDays(e, r);
                s = s > b ? b : s;
                var h = calendarFunctions.getAdDateByBsDate(e, r, s);
                return {
                    bsYear: e,
                    bsMonth: r,
                    bsDate: s,
                    weekDay: h.getDay() + 1,
                    formattedDate: calendarFunctions.bsDateFormat(i, e, r, s),
                    adDate: h,
                    bsMonthFirstAdDate: c,
                    bsMonthDays: b
                }
            },
            getAdDateByBsDate: function(e, r, s) {
                t({
                    bsYear: e,
                    bsMonth: r,
                    bsDate: s
                }), n(e), o(r), d(s);
                var i = calendarFunctions.getTotalDaysNumFromMinBsYear(e, r, s),
                    l = new Date(a.minAdDateEqBsDate.ad.year, a.minAdDateEqBsDate.ad.month, a.minAdDateEqBsDate.ad.date - 1);
                return l.setDate(l.getDate() + i), l
            },
            getTotalDaysNumFromMinBsYear: function(e, r, s) {
                if (t({
                    bsYear: e,
                    bsMonth: r,
                    bsDate: s
                }), n(e), o(r), d(s), e < a.minBsYear || e > a.maxBsYear) return null;
                for (var i = 0, l = e - a.minBsYear, u = 1; u <= 12; u++) i += u < r ? calendarFunctions.getMonthDaysNumFormMinBsYear(u, l + 1) : calendarFunctions.getMonthDaysNumFormMinBsYear(u, l);
                return i + (e > 2085 && e < 2088 ? s - 2 : 2085 === e && r > 5 ? s - 2 : e > 2088 ? s - 4 : 2088 === e && r > 5 ? s - 4 : s)
            },
            getMonthDaysNumFormMinBsYear: function(e, n) {
                t({
                    bsMonth: e,
                    yearDiff: n
                }), o(e), l({
                    yearDiff: n
                });
                var r = 0,
                    s = 0;
                if (0 === n) return 0;
                for (var d = a.extractedBsMonthData[e - 1], i = 0; i < d.length; i++)
                    if (0 !== d[i]) {
                        var u = i % 2;
                        if (!(n > r + d[i])) {
                            s += a.bsMonthUpperDays[e - 1][u] * (n - r), r = n - r;
                            break
                        }
                        r += d[i], s += a.bsMonthUpperDays[e - 1][u] * d[i]
                    }
                return s
            },
            getBsMonthDays: function(e, r) {
                t({
                    bsYear: e,
                    bsMonth: r
                }), n(e), o(r);
                for (var s = 0, d = e + 1 - a.minBsYear, i = a.extractedBsMonthData[r - 1], l = 0; l < i.length; l++)
                    if (0 !== i[l]) {
                        var u = l % 2;
                        if (d <= (s += i[l])) return 2085 === e && 5 === r || 2088 === e && 5 === r ? a.bsMonthUpperDays[r - 1][u] - 2 : a.bsMonthUpperDays[r - 1][u]
                    }
                return null
            },
            getBsDateByAdDate: function(e, a, n) {
                t({
                    adYear: e,
                    adMonth: a,
                    adDate: n
                }), r(e), s(a), i(n);
                var o = e + 57,
                    d = (a + 9) % 12;
                d = 0 === d ? 12 : d;
                var l = 1;
                if (a < 4) o -= 1;
                else if (4 === a) {
                    n < calendarFunctions.getAdDateByBsDate(o, 1, 1).getDate() && (o -= 1)
                }
                var u = calendarFunctions.getAdDateByBsDate(o, d, 1);
                n >= 1 && n < u.getDate() ? (d = 1 !== d ? d - 1 : 12, l = calendarFunctions.getBsMonthDays(o, d) - (u.getDate() - n) + 1) : l = n - u.getDate() + 1;
                return {
                    bsYear: o,
                    bsMonth: d,
                    bsDate: l
                }
            },
            getBsYearByAdDate: function(e, a, n) {
                return t({
                    adYear: e,
                    adMonth: a,
                    adDate: n
                }), r(e), s(a), i(n), calendarFunctions.getBsDateByAdDate(e, a, n).bsYear
            },
            getBsMonthByAdDate: function(e, a, n) {
                return t({
                    adYear: e,
                    adMonth: a,
                    adDate: n
                }), r(e), s(a), i(n), calendarFunctions.getBsDateByAdDate(e, a, n).bsMonth
            },
            bsDateFormat: function(e, r, s, i) {
                t({
                    dateFormatPattern: e,
                    bsYear: r,
                    bsMonth: s,
                    bsDate: i
                }), n(r), o(s), d(i);
                var l = calendarFunctions.getAdDateByBsDate(r, s, i).getDay() + 1,
                    u = e;
                return (u = (u = (u = (u = u.replace(/%d/g, calendarFunctions.getNepaliNumber(i))).replace(/%y/g, calendarFunctions.getNepaliNumber(r))).replace(/%m/g, calendarFunctions.getNepaliNumber(s))).replace(/%M/g, a.bsMonths[s - 1])).replace(/%D/g, a.bsDays[l - 1])
            },
            parseFormattedBsDate: function(e, n) {
                t({
                    dateFormat: e,
                    dateFormattedText: n
                });
                for (var r = 0, o = {
                    bsYear: null,
                    bsMonth: null,
                    bsDate: null,
                    bsDay: null
                }, s = 0; s < e.length; s++)
                    if ("%" === e.charAt(s)) {
                        var d = e.substring(s, s + 2),
                            i = e.charAt(s + 2),
                            l = n.substring(s + r),
                            u = "" !== i ? l.indexOf(i) : l.length,
                            c = l.substring(0, u);
                        "%y" === d ? (o.bsYear = calendarFunctions.getNumberByNepaliNumber(c), r += c.length - 2) : "%d" === d ? (o.bsDate = calendarFunctions.getNumberByNepaliNumber(c), r += c.length - 2) : "%D" === d ? (o.bsDay = a.bsDays.indexOf(c) + 1, r += c.length - 2) : "%m" === d ? (o.bsMonth = calendarFunctions.getNumberByNepaliNumber(c), r += c.length - 2) : "%M" === d && (o.bsMonth = a.bsMonths.indexOf(c) + 1, r += c.length - 2)
                    }
                if (!o.bsDay) {
                    var b = calendarFunctions.getAdDateByBsDate(o.bsYear, o.bsMonth, o.bsDate);
                    o.bsDay = b.getDay() + 1
                }
                return o
            }
        }), e.fn.nepaliDatePicker = function(t) {
            var n = {
                options: e.extend({
                    dateFormat: "%D, %M %d, %y",
                    closeOnDateSelect: !0,
                    defaultDate: "",
                    minDate: null,
                    maxDate: null,
                    yearStart: a.minBsYear,
                    yearEnd: a.maxBsYear
                }, t),
                init: function(a) {
                    a.prop("readonly", !0);
                    var t = e('<div class="nepali-date-picker">');
                    e("body").append(t), "" !== a.val() ? n.renderFormattedSpecificDateCalendar(t, n.options.dateFormat, a.val()) : n.renderCurrentMonthCalendar(t), n.addEventHandler(a, t), n.addCommonEventHandler(t)
                },
                addCommonEventHandler: function() {
                    var a = e(".nepali-date-picker");
                    e(document).click(function(t) {
                        e(t.target).is(e(".nepali-date-picker")) || (a.hide(), a.find(".drop-down-content").hide())
                    })
                },
                addEventHandler: function(a, t) {
                    a.click(function() {
                        if (!e(".nepali-date-picker").is(":visible")) {
                            var r = e(this).offset();
                            return t.css({
                                top: r.top + e(this).outerHeight(!0),
                                left: r.left
                            }), a.val() && n.renderFormattedSpecificDateCalendar(t, n.options.dateFormat, a.val()), t.show(), n.eventFire(a, t, "show"), !1
                        }
                        e(".nepali-date-picker").hide()
                    }), t.on("click", ".next-btn", function(e) {
                        e.preventDefault();
                        var r = {
                            bsYear: t.data().bsYear,
                            bsMonth: t.data().bsMonth,
                            bsDate: t.data().bsDate
                        };
                        return n.renderNextMonthCalendar(t), n.triggerChangeEvent(a, t, r), t.show(), !1
                    }), t.on("click", ".prev-btn", function(e) {
                        e.preventDefault();
                        var r = {
                            bsYear: t.data().bsYear,
                            bsMonth: t.data().bsMonth,
                            bsDate: t.data().bsDate
                        };
                        return n.renderPreviousMonthCalendar(t), t.data(), n.triggerChangeEvent(a, t, r), t.show(), !1
                    }), t.on("click", ".today-btn", function(e) {
                        e.preventDefault();
                        var r = {
                            bsYear: t.data().bsYear,
                            bsMonth: t.data().bsMonth,
                            bsDate: t.data().bsDate
                        };
                        return n.renderCurrentMonthCalendar(t), t.data(), n.triggerChangeEvent(a, t, r), t.show(), !1
                    }), t.on("click", ".current-year-txt, .current-month-txt", function() {
                        if (e(this).find(".drop-down-content").is(":visible")) e(this).find(".drop-down-content").hide();
                        else {
                            t.find(".drop-down-content").hide(), e(this).find(".drop-down-content").show();
                            var a = e(this).find(".option-wrapper");
                            a.scrollTop(0);
                            var n = a.find(".active").position().top;
                            a.scrollTop(n)
                        }
                        return !1
                    }), t.on("click", ".current-month-date", function() {
                        if (!e(this).hasClass("disable")) {
                            var r = t.data(),
                                o = r.bsYear,
                                s = r.bsMonth,
                                d = r.bsDate,
                                i = e(this).data("date"),
                                l = calendarFunctions.bsDateFormat(n.options.dateFormat, o, s, i);
                            return a.val(l), n.setCalendarDate(t, o, s, i), n.renderMonthCalendar(t), d !== i && n.eventFire(a, t, "dateChange"), n.eventFire(a, t, "dateSelect"), n.options.closeOnDateSelect ? t.hide() : t.show(), !1
                        }
                    }), t.on("click", ".drop-down-content li", function() {
                        var r = e(this).parents(".drop-down-content");
                        r.data("value", e(this).data("value")), r.attr("data-value", e(this).data("value"));
                        var o = {
                                bsYear: t.data().bsYear,
                                bsMonth: t.data().bsMonth,
                                bsDate: t.data().bsDate
                            },
                            s = t.find(".month-drop-down").data("value"),
                            d = t.find(".year-drop-down").data("value"),
                            i = o.bsDate;
                        return n.setCalendarDate(t, d, s, i), n.renderMonthCalendar(t), t.data(), n.triggerChangeEvent(a, t, o), t.show(), !1

                    })
                },
                triggerChangeEvent: function(e, a, t) {
                    var r = a.data();
                    t.bsYear !== r.bsYear && n.eventFire(e, a, "yearChange"), t.bsMonth !== r.bsMonth && n.eventFire(e, a, "monthChange"), t.bsDate !== r.bsDate && n.eventFire(e, a, "dateChange")
                },
                eventFire: function(e, a, t) {
                    switch (t) {
                        case "generate":
                            e.trigger({
                                type: t,
                                message: "Nepali date picker initialize",
                                datePickerData: a.data(),
                                time: new Date
                            });
                            break;
                        case "show":
                            e.trigger({
                                type: t,
                                message: "Show nepali date picker",
                                datePickerData: a.data(),
                                time: new Date
                            });
                            break;
                        case "close":
                            e.trigger({
                                type: t,
                                message: "close nepali date picker",
                                datePickerData: a.data(),
                                time: new Date
                            });
                            break;
                        case "dateSelect":
                            e.trigger({
                                type: t,
                                message: "Select date",
                                datePickerData: a.data(),
                                time: new Date
                            });
                            break;
                        case "dateChange":
                            e.trigger({
                                type: t,
                                message: "Change date",
                                datePickerData: a.data(),
                                time: new Date
                            });
                            e.keyup();
                            break;
                        case "monthChange":
                            e.trigger({
                                type: t,
                                message: "Change month",
                                datePickerData: a.data(),
                                time: new Date
                            });
                            break;
                        case "yearChange":
                            e.trigger({
                                type: t,
                                message: "Change year",
                                datePickerData: a.data(),
                                time: new Date
                            })
                    }
                },
                setCalendarDate: function(e, a, t, r) {
                    e.data(calendarFunctions.getBsMonthInfoByBsDate(a, t, r, n.options.dateFormat))
                },
                renderMonthCalendar: function(e) {
                    e.find(".calendar-wrapper").remove(), e.append(n.getCalendar(e)).hide()
                },
                getCalendar: function(a) {
                    var t = e('<div class="calendar-wrapper">');
                    t.append(n.getCalendarController(a));
                    var r = e("<table>");
                    return r.append(n.getCalendarHeader()), r.append(n.getCalendarBody(a)), t.append(r), t
                },
                getCalendarController: function(a) {
                    var t = e("<div class='calendar-controller'>");
                    return t.append('<a href="javascript:void(0);" class="prev-btn icon" title="prev"></a>'), t.append('<a href="javascript:void(0);" class="today-btn icon" title=""></a>'), t.append(n.getMonthDropOption(a)), t.append(n.getYearDropOption(a)), t.append('<a href="javascript:void(0);" class="next-btn icon" title="next"></a>'), t
                },
                getMonthDropOption: function(t) {
                    var r = t.data(),
                        o = e('<div class="current-month-txt">');
                    o.text(a.bsMonths[r.bsMonth - 1]), o.append('<i class="icon icon-drop-down">');
                    for (var s = [], d = 0; d < 12; d++) s.push({
                        label: a.bsMonths[d],
                        value: d + 1
                    });
                    var i = n.getCustomSelectOption(s, r.bsMonth).addClass("month-drop-down");
                    return o.append(i), o
                },
                getYearDropOption: function(a) {
                    var t = a.data(),
                        r = e('<div class="current-year-txt">');
                    r.text(calendarFunctions.getNepaliNumber(t.bsYear)), r.append('<i class="icon icon-drop-down">');
                    for (var o = [], s = n.options.yearStart; s <= n.options.yearEnd; s++) o.push({
                        label: calendarFunctions.getNepaliNumber(s),
                        value: s
                    });
                    var d = n.getCustomSelectOption(o, t.bsYear).addClass("year-drop-down");
                    return r.append(d), r
                },
                getCustomSelectOption: function(a, t) {
                    var n = e('<div class="drop-down-content" data-value="' + t + '">'),
                        r = e('<div class="option-wrapper">'),
                        o = e("<ul>");
                    return e.each(a, function(e, a) {
                        o.append('<li data-value="' + a.value + '">' + a.label + "</li>")
                    }), r.append(o), o.find('li[data-value="' + t + '"]').addClass("active"), n.append(r), n
                },
                getCalendarHeader: function() {
                    for (var t = e("<thead>"), n = e("<tr>"), r = 0; r < 7; r++) n.append("<td>" + a.bsDays[r] + "</td>");
                    return t.append(n), t
                },
                getCalendarBody: function(t) {
                    var r = t.data(),
                        o = Math.ceil((r.bsMonthFirstAdDate.getDay() + r.bsMonthDays) / 7),
                        s = r.bsMonth - 1 != 0 ? r.bsMonth - 1 : 12,
                        d = 12 === s ? r.bsYear - 1 : r.bsYear,
                        i = d >= a.minBsYear ? calendarFunctions.getBsMonthDays(d, s) : 30,
                        l = null,
                        u = null;
                    null !== n.options.minDate && (l = calendarFunctions.parseFormattedBsDate(n.options.dateFormat, n.options.minDate)), null !== n.options.maxDate && (u = calendarFunctions.parseFormattedBsDate(n.options.dateFormat, n.options.maxDate));
                    for (var c = e("<tbody>"), b = 0; b < o; b++) {
                        for (var h = e("<tr>"), p = 1; p <= 7; p++) {
                            var D = 7 * b + p - r.bsMonthFirstAdDate.getDay(),
                                f = !0;
                            if (D <= 0 ? (D = i + D, f = !1) : D > r.bsMonthDays && (D -= r.bsMonthDays, f = !1), f) {
                                var m = e('<td class="current-month-date" data-date="' + D + '" data-weekDay="' + (p - 1) + '">' + calendarFunctions.getNepaliNumber(D) + "</td>");
                                D == r.bsDate && m.addClass("active"), n.disableIfOutOfRange(m, r, l, u, D), h.append(m)
                            } else h.append('<td class="other-month-date">' + calendarFunctions.getNepaliNumber(D) + "</td>")
                        }
                        c.append(h)
                    }
                    return c
                },
                disableIfOutOfRange: function(e, a, t, n, r) {
                    return null !== t && (a.bsYear < t.bsYear ? e.addClass("disable") : a.bsYear === t.bsYear && a.bsMonth < t.bsMonth ? e.addClass("disable") : a.bsYear === t.bsYear && a.bsMonth === t.bsMonth && r < t.bsDate && e.addClass("disable")), null !== n && (a.bsYear > n.bsYear ? e.addClass("disable") : a.bsYear === n.bsYear && a.bsMonth > n.bsMonth ? e.addClass("disable") : a.bsYear === n.bsYear && a.bsMonth === n.bsMonth && r > n.bsDate && e.addClass("disable")), e
                },
                renderCurrentMonthCalendar: function(e) {
                    var a = new Date,
                        t = calendarFunctions.getBsDateByAdDate(a.getFullYear(), a.getMonth() + 1, a.getDate()),
                        r = t.bsYear,
                        o = t.bsMonth,
                        s = t.bsDate;
                    n.setCalendarDate(e, r, o, s), n.renderMonthCalendar(e)
                },
                renderPreviousMonthCalendar: function(e) {
                    var a = e.data(),
                        t = a.bsMonth - 1 > 0 ? a.bsMonth - 1 : 12,
                        r = 12 !== t ? a.bsYear : a.bsYear - 1,
                        o = a.bsDate;
                    return r < n.options.yearStart || r > n.options.yearEnd ? null : (n.setCalendarDate(e, r, t, o), void n.renderMonthCalendar(e))
                },
                renderNextMonthCalendar: function(e) {
                    var a = e.data(),
                        t = a.bsMonth + 1 <= 12 ? a.bsMonth + 1 : 1,
                        r = 1 !== t ? a.bsYear : a.bsYear + 1,
                        o = a.bsDate;
                    return r < n.options.yearStart || r > n.options.yearEnd ? null : (n.setCalendarDate(e, r, t, o), void n.renderMonthCalendar(e))
                },
                renderFormattedSpecificDateCalendar: function(e, a, t) {
                    var r = calendarFunctions.parseFormattedBsDate(a, t);
                    n.setCalendarDate(e, r.bsYear, r.bsMonth, r.bsDate), n.renderMonthCalendar(e)
                }
            };
            return this.each(function() {
                var a = e(this);
                n.init(a)
            }), n.addCommonEventHandler(), this
        }
    }(jQuery, calendarFunctions);