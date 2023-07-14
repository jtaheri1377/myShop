import { Component, Output, EventEmitter, Input, DoCheck } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-filter-navbar',
  templateUrl: './filter-navbar.component.html',
  styleUrls: ['./filter-navbar.component.css']
})

export class FilterNavbarComponent implements DoCheck {
  @Output() onChoose = new EventEmitter<any>();
  @Input() choosen: any;
  str: string[] = [];

  ngDoCheck(): void {

  }

  onFilterItemClicked(item: any, Unchoose: boolean) {
    if (!Unchoose) {
      let output = this.filter_items[item.id];
      this.onChoose.emit(output);
    }
    else {
      item.choosen = '';
    }
  }

  filter_items: any = [
    {
      id: 0,
      text: 'نمایش بر اساس',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'پرفروش ترین'
        },
        {
          id: 1,
          text: 'ارزانترین'
        },
        {
          id: 2,
          text: 'بیشترین تخفیف'
        },
        {
          id: 3,
          text: 'جدیدترین'
        },
        {
          id: 4,
          text: 'بهترین کیفیت'
        }
      ]
    },
    {
      id: 1,
      text: 'برند ها',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'Adidas'
        },
        {
          id: 1,
          text: 'Sinc'
        },
        {
          id: 2,
          text: 'Nike'
        },
        {
          id: 3,
          text: 'Cat'
        },
        {
          id: 4,
          text: 'Caterpillar'
        }
      ]
    },
    {
      id: 2,
      text: 'قیمت',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'از 50,000 تومان'
        },
        {
          id: 1,
          text: 'از 100,000 تومان'
        },
        {
          id: 2,
          text: 'از 200,000 تومان'
        },
        {
          id: 0,
          text: 'از 500,000 تومان'
        },
        {
          id: 1,
          text: 'از 1000,000 تومان'
        },
        {
          id: 2,
          text: 'از 1,500,000 تومان'
        }
      ]
    },
    {
      id: 3,
      text: 'رنگ',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'آبی'
        },
        {
          id: 1,
          text: 'قرمز'
        },
        {
          id: 2,
          text: 'زرد'
        },
        {
          id: 1,
          text: 'سفید'
        },
        {
          id: 2,
          text: 'مشکی'
        },
      ]
    },
    {
      id: 4,
      text: 'تخفیف و فروش ویژه',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'کالا های با تخفیف شگفت انگیز'
        },
        {
          id: 1,
          text: 'کالا های دارای تخفیف'
        }
      ]
    },
    {
      id: 5,
      text: 'موجودیت انبار',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'فقط کالاهای موجود'
        }
      ]
    },
  ];
}
