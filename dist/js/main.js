$(function() {

    var icons = {
			park: {
				icon: 'data:image/png;base64,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'
            },
            fun: {
            	icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdWSURBVHgB1Vs9bFNXFP7uTaBBXZIRFpzXCZaE0g2kPES3IiVIdKwIQ7u1CQukXZIMFZQFRx07JKjditREgo0qRqIjxRkKG7gL2UqYSJv43Z7vXtt5fn527PcT4k8KxO9dO++75//cY4WcYGYxXD0KXw3iJAKMK4VxYzAstwqRpRUlPzDYqipsyOvS4DbKqogt5ACFDEGSGMKMAXz+IAXkwUpGY1UHWFO3ZUMyQiaEd+bgDwDzaUm2A8lXgcUjt1FCSqQinDfRGFT0AGbV91hDQiQibOZQEJLLB0g0ihUtEk+i6ho9wnyHmUDh2XskS0wHwLr5FlfRI3qSsLmJu0J2FocI2qCofsD1btd3RZje1xyTHTUYxyGEhLyyMrjcjYrvS5j2SvVBa/w8bKiIfV7Yj3RHwn1Eto6K3saZTklLR6dlFH5D/5AlCjS9TgvaEqaDOqw22wl8Zj57u/uxKr07h2m5sYx+RoDrA3dQjF5uIdyHdhsPKUa0EnuOOLEWlZacdQH9TpZQEkpjtLSJ8O4NTInIe85eEsPzoT4rQs+/gTqXfT7DbJD5fvhaE2Gl2xt7Zhgahro4D/XNM+gv16FOjCF4tAj16by9lzVY3IRfN2yYO6HR2aWnguc7oifE8f8j9f6LNZgn4lO2XciklI0QN38UkTXEJ12ol5aD9Yu1Mi9bUJrnZqDO19T1r1UEvy8CL0stS82TJeD0JJAD4ZqUS/zdSrjmmV8hQ6iz01BXli254Pkq8PReQ5oYKQBvKs1vkM2hlIMfzwCvy8gakoGNMAOzNryjMIWMYd5tWYLBTxdEakt7ZD0f+sYrtxlhyH0jm6NOZf4oFrtDrsqzhAcNJpE16mrr+a33SF5sOUrayMao8zPIA6LWE/xf29Ivj2KeEhM1pqNqgUjf/HwZyvOb73fapJSwjUXhqkXUueXLRmxXeX5suFF0UEKcDq1Bmpskzit2k7LAh5igSvvICyIxa5fRpIJOa3gUwcPr1sbp4Oqb0mmT0mJnB6NaugVjyBPP12Lt0jycdSosHjm4M7rn1DbL8ZuUAQY0xrR2pwG5wTxdcb94vvufIad+LQrPpZpMTkymRwQOPP1Q1TkbfwvIEeqSJBPHx2AYoqJgcnJW0vfTU06VGbfbJCcZoMJMq4CcQbvUknEZ2mUoHjPmqk9crcKQFIjnbtzPB4VBHATqzosFAjOssDQZnkT69to7yadfPc4l06qDKp15Ch0L8cSaiYaQaSocaimlDUdSOVlbl00x4ryYe9sNiKahKXBwhImYHFpRspfuOk9NUO09313nBhwfdxtALRGPb207hdpn4rSU1LWWTLcQmzYP3GGBurIC5kHm/rX4tfxcTzZgVH68Cfva/DoN8+c9JEBlUDr2W2lDgJIHCvjAXaieEomxZGwQZgPgSagkFEKUOF5viDqXnEQljDG8URW1NA5wbARJYEhYzoo2hG/69JIP1gVhPnRjfyk9qizttAZ1ccGt26pAS4oZeD7waGHvAyjhzYROzeAtCZcHTLZ9rCYVp/21iavK821mFd4oqq1tBohEg2iCwvVEwhgtmlzWuprdOEEdyvOBB7Mu0djccN45DqcmYcIhiO/j+z+agPr6WUsRQUdmXj5GCpT0wH/pxwhiIcWBVdeRk867xsCmkOyG1F9bQi42m18uu9ZQuIhgvE6RgXFYRrPtoZA9aUpJSwlIJ4W4yGc3oyAEQhIbPtmIzRZhskxBPd85sgSQJyg1WjzSfE+lJ3EImCqK57aZFCufSNhSnt8SU42Uixgagf5q3Xpj68lr9+162nrCLCwI3FyITS1F1MVgCJlW3fSw5uOre8lG1IOL9A2vhZMROrj70/GZENV9cwNJcUTD2o4lTFEHcyhl1eqxRcCxmjqK/Zq4tqxcZ0HB4t86LtbBHTKplnjdA6w6186YGsUD56B0Vt2PkCNqC+k/B+xB1zIpa++fL1tbtRsgtm1erDoV5uZF4nUvEMKL9d+bciyR8noSKetbRqQ6JZJ5u/9i8bRabLqRO0fBk4lROrypRpjiBigh3fY9nVEZuI3GG5vKw6RSpsrqL7qQan19u44HQYmy7cNeNuG5PDp40f3nN/2toHnCpyWLTirlQ4oVkW5TVdJyPiw7cE3+SV5/HR5wqmcxerGVsHizarV1Yb9BTv8X4kaYYodajt6RuGywhD6FHAwuqVuILZjbVsL2COYDsWfVX5M8nMrTt3Cm3f22Y0s2x/4X7KtW0D+ocASx04KOg2m1ZLtfSHc1erjv+DA/wH6QQcI2Q/6warzdOqIUuxY9YOcmiuL98jnATQg6KCl+Frr9UkjP7bvalB4rqwLeJyRXYPg8GjNt1/ltCcCZEA6wHehMV/jvS/UjJ/rXknwFIFWD1g6yudmuAg4AJGpSfrslZUfagTNeVHOVUw6eBdE6MiFchx1/0piUCmUqLfkaycfsxmT5LbVMCYfBTK02P+JLSBvjsKdyql+ILLVfw5P7ZQmSZbOLv9lJzeureP8DW4gBsFShpKYAAAAASUVORK5CYII='
            },
            pharm: {
            	icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAa/SURBVHgB1Vs9UBtHGH27yARPikCqmCaCVHEKcCiTGcTEpTOGmaTMBIrU4MYmaYAiA6ZB1CkgkzKZMZ5x6UzEjF06gSJOFSM3Jh2kCgnoNt/bE1jS3Umn3ROgNwMI3em0776f/b63ewodgplDf6UXBZXDuwgwqhRGjUG/HMo3nFpW8gODw4rCrvxfyh1hRxVxiA5AIUOQJPowa4ACf+ABGVjJaGzpAA/VityQjJAJ4eN5FHqABV+SSSD5CrB0ZQUleMKLcKeJxqCsezCnvsVDOMKJsJlHXkhunCPRRmxqsbiLq2u0CfMNZgOF3y6QLDEdAL+Yr/El2kRbFjb3sCZk53CJoA2K6j7upD0/FWFmX3NV7qjBKC4hZMrbUQZTaVy8JWHGK90H0fnzsqEs8TnRinRTwl1E9hRlfYQbzYqWpknLKDxA95Al8gy9ZickEmaCuqwx2wwcM8eedDzWpU/mMS0HNtDNCHCnZxXFxrcjhLswbuMhzYhWEs8NSSzi0lKzLqLbyRJKptIYL62z8MldTCptE1V26JOOcHAU6v1JYHgc6u18+B5xdAjzagd4tQuzVwKebyFriLdO1DYddYQr89hDVtYVUuqjWaiP50KCL0pCToj9JQT/ObRkMZCHekduxuCI3IwCcCBt8bNNmF+/t6+zADstvYKJmv9DsPPRaJ7SU38Jid5ctK/N03WYJ8WQYDMIeZLWnyyEn3u8GBLPALVWPiMczEvpmEFDoG6tCeG5kKgMuiXRRtAzxCuUEDdPizCPUpfJyWOqsbIlXM3Me/CE+mwD6oNJBD9MWRf2wvVJ6M83YH7fgvlpBr6QCmyAFZjN0scKk/CEtSzJfjfhT5aQBMZr8Zq8ti9O+sIuL2d/Gdw2cIcam7ZubC3LrBsHuuqYtK99A5FDdN1Y15dr8Zr6K0ktBy/D8xwhysy4HStbv6APB3CFJBsOiAnGxmwShgvVgZcjn2/lFepW0d6s4P5Q+zmhBnRrLab2qpfVh6HoYDNxCgSrQ3U/aXB6I+lFXngT44zhAjxAdw5csnE7YIHyZF2y9+zrosUBx8cY0qIWjMARSjKpnT/3ttFp2PitVm2u6NEYyYkm1O+csIYLYew1xmXcwK4l31dWW5ExMPnVeg2tLN/FEtU4zgJc/ZAE7VFKCgmWi5ELS6ypmwvR8+PcXt5Tn65F2jYWHJGsvL8L9d44XA3EpR5OS3k4QokVzbOE8k+sniYpBUvRaUoxm8fF6r5YfaxtZbYW+bZ16TrIoMxhGecGNh0eSYvwI0z0vYXzgslgJvAjzPiLqZw6BcUZwZM0Y7gM1zhmdr4WM01Ue129bCLvN8asXjiIdVPzImaq43clla7pUM6JYn9oHNcQ7aAGo9ONbeL36wemZLCxTQDzwCNpJ/cbsn0csYRZIS0MCcta0a7wdZrNjXQ0Wpp9Qws1zJmNtTFtnXRfLdlWcyvVkeECAo8GQgbxtxbC7j5SLQ68a9wUUMOFMISeOy8Nc2FhR+uKx3aCjGrclmBrSQXEX/Ip5Xr+Q0naQ2ewGiJhVlZp5Bh1t31hhRqZ/S7JDT7gZpkcZQ/Rs0rOehYz7+MlaElIhu6WFIvi/kbOa0RwdNA087JBoSAY/DjtpWQKvxK5WsVDxPdt7dMmUmzjNPTFg7CZjyNA9/95EW2BejZ1LREE4enOQRDuC7GFh5jaI/WFsFOLWNiqGte9JbIzhYTX5LV9cUVji38tYZqaUiY8YcTt2EzQ0kwyTomMCUrCw5KVa/Ga3uOiO1fXmDoixENUkDpBnQJBq/irXamwn1vyEu1qESvE2wMZifEWLBSoZlLzkte2aT9daiF5Wv9qv23+Wa2p4UIY52lXKtKj3LOCsz61jnCmVq4FM+1QIVxDohJSs5hm15P+3Ib5YyuqcmQAE2AqtxrGLxGp9jK18sVjU6xbt2wRaQ/lDszIr2xv88WAu3oiE3+UsGSzSiV6YrdBVv8X47YwxQoAvasoBgbr6FJIVl5Xy4itVBI7Ybv77g2JZ9VdO3m4K08v40bS8USJxxYj/9o11TK6B2VuQWx2QlNNq7qe2i2kU209bCni8QL2QsZDKOgwrBsfRbcoxZ6LNnB8D0XJfrO4RGCCkuZnMe1DIW3Ld9VdeiyU87hISK3A6bN3tb1Oz/kRAG5gkw97rXu4gt2PrOjPuDwC4CjQhqhuZKP2msc5gESN59MtXoRPwaaDbq46VINnQfQUmRA+hd3+pHFbOpRJX/JVkttUY7J8Si1TwrVgpVbdP1KQKW2Emz1V6Pr5hlPtY3igPq6xY07wkkpqpx7F+x/ylsoXqKCvxwAAAABJRU5ErkJggg=='
            },
            school: {
            	icon: 'data:image/png;base64,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'
            },
            gym: {
            	icon: 'data:image/png;base64,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'
            },
            cart: {
            	icon: 'data:image/png;base64,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'
            },
            metro: {
            	icon: 'data:image/png;base64,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'
            },
            logo: {
            	icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAZVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDItMjVUMTM6MzU6MTkrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDItMjVUMTM6MzU6MTkrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAyLTI1VDEzOjM1OjE5KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVjZDY0NzMxLTk2ZGItNjU0ZS04Nzg5LWU3NGVhYTQ5NDNhMSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUzMzAwNzA3LTFiZDAtOGY0ZS1iOTRmLWRkMzFkZDk1YjczYyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjI1ZGYyMGMxLTBhOTctYTU0YS04Zjc2LTA1NjAzNDgyMTQ1MyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI1ZGYyMGMxLTBhOTctYTU0YS04Zjc2LTA1NjAzNDgyMTQ1MyIgc3RFdnQ6d2hlbj0iMjAxOS0wMi0yNVQxMzozNToxOSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1Y2Q2NDczMS05NmRiLTY1NGUtODc4OS1lNzRlYWE0OTQzYTEiIHN0RXZ0OndoZW49IjIwMTktMDItMjVUMTM6MzU6MTkrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1w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'
            },
            busStation: {
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAYAAAD17ghaAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAX5aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTVUMTM6NTg6MDYrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTVUMTM6NTg6MDYrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTE1VDEzOjU4OjA2KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2NTA0M2IxLWU5NDktMmY0ZC1hM2Q2LTU5ODYxMjY5NzQ1YiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUyYTA0NDZjLWVkOTItZTQ0My05MzhlLWY1MmZiN2ZmNzBiYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmUyNTFiYmM3LTExNDEtMjg0Yy04ZGFiLTYyNDhhN2RkZTdjNSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJBZG9iZSBSR0IgKDE5OTgpIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMjUxYmJjNy0xMTQxLTI4NGMtOGRhYi02MjQ4YTdkZGU3YzUiIHN0RXZ0OndoZW49IjIwMTktMDEtMTVUMTM6NTg6MDYrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTY1MDQzYjEtZTk0OS0yZjRkLWEzZDYtNTk4NjEyNjk3NDViIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTE1VDEzOjU4OjA2KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nTcvlgAABTVJREFUWIXFmFlsVGUUx3/f3Wa9M6VQSpQCVijS4oNUVF5cEkIEI0IQE+ODkiCCIiCRIDwI8qDEsKMQxCXGJ1HUAAKJGsBINMbgBgoV2Qq1ZWnp3Nnu3M2HljozzHSm1IR/cjPJd8495//9z3fOvXfEmtEN3ExINzV7Hwn4gMeBD4DfgKuA1/37C/A2MBFQ+kJAlFECBVgmYFUkkyFiWQRtG9V1kT0PRwgykkRCUYhpGnFVxYPlwOpugv0iMFvA9krTpDqVQnXdkjuyJInWQIB2nw9gBvBZb/69lWCl5rrbR8ViDE0kykoOoLouNYkEtYaB4nk7gYU3QuCNoG2vGBWLEbDtshLnQ7csRsZiqK67AZjXFwLzfI7zSq1hoJS562LwOQ61hoHkeVuA8eUQCAvYMiIeR/ZKnp+y4Hccbk0moYgK+QSWVKXT+B3nf0l+DZWmSci2ZwHT8m3ZPesXnvdqVSqV4zB4ymRq5swG1wWp/LHhOQ5uOs2x+QuxOjqoTqU4pevzgC+KEZgatSyULOkj4+7ilqee5PjSZQyYMAHJp5VM7KZNWj7eQbh+DMOfm8PQWU9zet0GdMtCc91JGUm6Hfj7mn/2librlpUTbMi0xzizcTP1G9dhtbcTbWwEIUida0arqiI8Zgypc81krlxhyPRppM41E7pjNAMfvJ/alxfTfvgwamVlT7xoJgN5ZchWoDGY13LqgApkXafzpyO07dpNaHQdHd8dxjh6DIDAsBou7duPEo1QPfVRLu3bjxqNgpDwbJv2A4cI1dX1xAtbFpf8/geAtYUUqCk0bIQQSD4NJRpB8vuRw2GUaAQ5FETy+1GiERQ9glCUrvVgsPtGCVkP58TqPtxjiylQUaj1UmfPIvl8NGzeCEBo1Mgce7RxHACebdOweSNu2qRpxUrUARXUvbaC+Imm/xTt2uDQYgQMVwhdyiPhpk3+WPDSdcRKoXXn56ROn6HqkSk9a6KbR7ZfdglarD60WSmoAyoIN9TnrDlCALRnr2Ur8GtKlkf7soZQYPhwGra+hez3IwUCZNraSJw8yfGlyyFPKSFJjFm/lsCwGnzV1diJBK5p4iQSPT5pWQb4sxiB75OK8kRFV6sAIOs6zdu2M2TGdGIHDzFo0kSk5vPctngR5oWWHAKBEcNxMybqwEoufrmXcEM9F3fvoebZ2T0+cVUF+Cb7vmzN98TUnPJwdO7zWJ2dOMkknm3jptIIVcExDKzOzpzLNuIIWcE1M3ieh5NIYF3t5Pc5c3vidWgawEfFFDhpyvKBuKo+FO4eSIkTTSRONBE78jP1m9bjJJNkWts49867XAchqFu1EscwiNw5lmMvLiJz+XKPOaZpmLK8CziZc1veG9FM3bJ21BrG9Qn6AQ9oikZJy/JkYH+2Lf/Yf2Ko6t78UvQXFwMB0rK8KT95IQIAWy+EQtdapt+IqyptgQDA64XshQjsyUjS6uZQqN/J07LM2XAYD2YCbeUSAFjWqWlbWq7N9RuAKcuc0nVsIeYDnxbzkycNGlzMdjCpKJWeEOPzH9OlkFQUTkUi2JK0CNjcm29vBCzg24SiRE1ZHh+xLMo5Fe0+H2d0HVeIZ4BtpfxLDX8DeOGqpq35KxLB7BqlBeEKQXMoRHMo9J4HdwMflsG3VwWy8ZUtSZ3tPt/DQgiCtp2jhqGqnNZ14qr6JrAA+KecoH0hAPCDJ8T7cVVVrmravRJd8p0PhWgNBr92hFhCiXoXQjkfp4VwD13v+fcBW4FNNxIE+vgpnYUfu69+46b/QfEvGbzhePjgWmsAAAAASUVORK5CYII='
            }
    }

    var features = [

            {
                position: { lat: 60.074956, lng: 30.320439 },
                type: 'school',
                title: 'Школа № 547',
                typea: 'school',
            },
            {
                position: { lat: 60.076460, lng: 30.319473 },
                type: 'school',
                title: 'Школа № 509',
                typea: 'school',
            },
            {
                position: { lat: 60.071091, lng: 30.333592 },
                type: 'school',
                title: 'Школа № 509',
                typea: 'school',
            },
            {
                position: { lat: 60.075491, lng: 30.338538 },
                type: 'school',
                title: 'Школа № 509',
                typea: 'school',
            },


            {
                position: { lat: 60.071695, lng: 30.320879 },
                type: 'cart',
                title: 'Продукты 24',
                typea: 'cart',
            }, 
            {
                position: { lat: 60.073629, lng: 30.352555 },
                type: 'cart',
                title: 'Реалъ',
                typea: 'cart',
            }, 


            {
                position: { lat: 60.070349, lng: 30.336534 },
                type: 'pharm',
                title: 'Аптека для бережливых',
                typea: 'pharm',
            },
            {
                position: { lat: 60.080833, lng: 30.281608 },
                type: 'pharm',
                title: 'Аптека для бережливых',
                typea: 'pharm',
            },
            {
                position: { lat: 60.072672, lng: 30.328230 },
                type: 'pharm',
                title: 'МедЛаб',
                typea: 'pharm',
            }, 


            {
                position: { lat: 60.070066, lng: 30.329260 },
                type: 'fun',
                title: 'Десткий сад "Карапузы"',
                typea: 'fun',
            },                         
            {
                position: { lat: 60.076270, lng: 30.335397 },
                type: 'fun',
                title: 'Десткий сад "Viva Deti"',
                typea: 'fun',
            },                          
            {
                position: { lat: 60.077405, lng: 30.335805 },
                type: 'fun',
                title: 'ГБДОУ детский сад №89 "Бригантина"',
                typea: 'fun',
            },                          
            {
                position: { lat: 60.077326, lng: 30.323154 },
                type: 'fun',
                title: 'Частный детский сад Sun School',
                typea: 'fun',
            },                           


            {
                position: { lat: 60.076771, lng: 30.341301 },
                type: 'gym',
                title: 'Спортивный Комплекс',
                typea: 'gym',
            },                 
            {
                position: { lat: 60.072879, lng: 30.345089 },
                type: 'gym',
                title: 'Спортивный клуб Феникс',
                typea: 'gym',
            },                  
            {
                position: { lat: 60.059109, lng: 30.337440 },
                type: 'gym',
                title: 'Фитнес-Центр Александра Вишневского',
                typea: 'gym',
            },



            {
                position: { lat: 60.0509, lng: 30.332666 },
                type: 'metro',
                title: 'Станция Метро "Проспект Просвещения"',
                typea: 'busStation',
            },
            {
                position: { lat: 60.0662, lng: 30.334120 },
                type: 'metro',
                title: 'Станция Метро "Парнас"',
                typea: 'busStation',
            },


            {
                position: { lat: 60.068521, lng: 30.313409 },
                type: 'logo',
                title: 'Жилой комплекс Континенты',
                typea: 'logo',
            },

            {
                position: { lat: 60.072961, lng: 30.301001},
                type: 'park',
                title: 'Шуваловский парк',
                typea: 'park',
            },
    ]

    var gmarkers1 = [];
    var map;

    function ZoomControl(controlDiv, map) {

	  controlDiv.style.padding = '5px';

	  var controlWrapper = document.createElement('div');
	  controlWrapper.style.backgroundColor = 'white';
	  controlWrapper.style.borderStyle = 'solid';
	  controlWrapper.style.borderColor = '#FFFFFF';
	  controlWrapper.style.borderWidth = '1px';
	  controlWrapper.style.borderRadius = '10px';
	  controlWrapper.style.overflow = 'hidden';
	  controlWrapper.style.cursor = 'pointer';
	  controlWrapper.style.textAlign = 'center';
	  controlWrapper.style.width = '64px'; 
	  controlWrapper.style.height = '128px';
	  controlDiv.appendChild(controlWrapper);

	  var zoomInButton = document.createElement('div');
	  zoomInButton.classList.add('google-control-btn');
	  zoomInButton.classList.add('google-control-btn_zoomIn');
	  zoomInButton.style.width = '64px'; 
	  zoomInButton.style.height = '63px';
	  zoomInButton.style.borderBottom = '1px solid #FFFFFF';
	  zoomInButton.style.background = '#fd7800';
	  zoomInButton.style.position = 'relative';
	  controlWrapper.appendChild(zoomInButton);

	  var zoomOutButton = document.createElement('div');
	  zoomOutButton.style.width = '64px'; 
	  zoomOutButton.style.height = '64px';
	  zoomOutButton.style.background = '#fd7800';
	  zoomOutButton.style.position = 'relative';
	  controlWrapper.appendChild(zoomOutButton);

	  var lineZoomControl = document.createElement('div');
	  lineZoomControl.classList.add('google-line');
  	  lineZoomControl.style.position = 'absolute';
	  lineZoomControl.style.top = '50%';
	  lineZoomControl.style.left = '50%';
	  lineZoomControl.style.transform = 'translate(-50%, -50%)';
	  lineZoomControl.style.height = '2px';
	  lineZoomControl.style.width = '50%';
	  lineZoomControl.style.background = "#FFFFFF";

	  var lineZoomControl2 = document.createElement('div');
	  lineZoomControl2.classList.add('google-line');
  	  lineZoomControl2.style.position = 'absolute';
	  lineZoomControl2.style.top = '50%';
	  lineZoomControl2.style.left = '50%';
	  lineZoomControl2.style.transform = 'translate(-50%, -50%)';
	  lineZoomControl2.style.height = '2px';
	  lineZoomControl2.style.width = '50%';
	  lineZoomControl2.style.background = "#FFFFFF";


	  var lineZoomControl1 = document.createElement('div');
	  lineZoomControl1.classList.add('google-line-vert');
	  lineZoomControl1.style.position = 'absolute';
	  lineZoomControl1.style.top = '50%';
	  lineZoomControl1.style.left = '50%';
	  lineZoomControl1.style.transform = 'translate(-50%, -50%) rotate(90deg)';
	  lineZoomControl1.style.height = '2px';
	  lineZoomControl1.style.width = '50%';
	  lineZoomControl1.style.background = "#FFFFFF";


	  zoomInButton.append(lineZoomControl, lineZoomControl1);

	  zoomOutButton.append(lineZoomControl2);

	  google.maps.event.addDomListener(zoomInButton, 'click', function() {
	    map.setZoom(map.getZoom() + 1);
	  });

	  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
	    map.setZoom(map.getZoom() - 1);
	  });
};

    function initMap () {
        
        map = new google.maps.Map(document.querySelector('#map'), {
            center: new google.maps.LatLng(60.068521, 30.313409),
            zoom: 14,
            streetViewControl: false,
            mapTypeControl: false,
            gestureHandling: 'greedy',
            scrollwheel: false,
            disableDefaultUI: true,
            styles: [
            {elementType: 'geometry', stylers: [{color: '#333333'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#e7ad7f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#FFFFFF'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#fd7800'}]
            },
            {
              featureType: 'road.local',
              elementType: 'geometry',
              stylers: [{color: '#a0561e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#FFFFFF'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#b0bc01'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#177d79'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#FFFFFF'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });

		var zoomControlDiv = document.createElement('div');
		var zoomControl = new ZoomControl(zoomControlDiv, map);

		zoomControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);

        google.maps.event.addListener( map, 'bounds_changed', function () {
            if ( $(map.getDiv()).children().eq(0).height() == window.innerHeight && $(map.getDiv()).children().eq(0).width()  == window.innerWidth ) {
                map['gestureHandling'] = 'greedy';
            }
            else {
                map['gestureHandling'] = 'collective';
            }
        });

        features.forEach(function (feature, value) {

            var infowindow = new google.maps.InfoWindow({
                content: feature.title
            });

            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map,
                category: feature.typea,
            })

            gmarkers1.push(marker);

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        })
    }

    filterMarkers = function (category) {
    	map.panTo(new google.maps.LatLng(60.068521, 30.313409));
    	map.setZoom(14);
        gmarkers1.map((marker) => {
        	if (marker.category == category || category.length === 0 || marker.category == "logo") {
                marker.setVisible(true);
            }
            else {
                marker.setVisible(false);
            }
        });
    }
    function moveToLocation(){
        map.panTo(new google.maps.LatLng(60.068521, 30.313409));
        gmarkers1.map((marker) => {
        	marker.setVisible(true);
        });
    }

    // Запуск карты
    initMap();
    $(document).on("click",".legend-item",function(e){
        e.preventDefault();
        var text = $(this).attr("data-filter-map");
        if(text) filterMarkers(text);
        else moveToLocation();
    })
});