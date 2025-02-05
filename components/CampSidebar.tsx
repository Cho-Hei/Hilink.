import StickyBox from "react-sticky-box";
import {
    CalendarBlank,
    CaretDown,
    CheckSquare,
    CoinVertical,
    CurrencyCircleDollar,
    Envelope,
    HandPointing,
    Lock,
    MapPin,
    Minus,
    Person,
    PhoneCall,
    Plus,
    Users,
    UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { DateRangePicker } from "react-date-range";
import Button from "@/components/Button";
import { useCallback, useEffect, useState } from "react";
import { TentType } from "@/type/TentType";
import { DateRangeType } from "@/type/DateRangeType";
import { addDays } from "date-fns";

interface GuestType {
    adult: number;
    children: number;
    infant: number;
    pet: number;
}

interface CampSidebarProps {
    camp: TentType;
    range: DateRangeType[];
    setRange: (range: DateRangeType[]) => void;
}

const CampSidebar = ({ camp, range, setRange }: CampSidebarProps) => {
    const [openDate, setOpenDate] = useState(false);
    const [openGuest, setOpenGuest] = useState(false);

    const fee = {
        cleaning: 40,
        service: 60,
        price: camp.price,
        adult: 100,
        children: 50,
    };

    const [guest, setGuest] = useState<GuestType>({
        adult: 0,
        children: 0,
        infant: 0,
        pet: 0,
    });

    const handleOpenDate = () => {
        setOpenDate(!openDate);
        setOpenGuest(false);
    };

    const handleOpenGuest = () => {
        setOpenGuest(!openGuest);
        setOpenDate(false);
    };

    // Check if the click event occurs outside the popup.
    const handleClickOutsideDatePopup: EventListener = useCallback(
        (event) => {
            // Cast event.target to Element to use the closest method.
            const targetElement = event.target as Element;

            if (openDate && !targetElement.closest(".form-date-picker")) {
                setOpenDate(false);
            }
        },
        [openDate]
    );

    // Check if the click event occurs outside the popup.
    const handleClickOutsideGuestPopup: EventListener = useCallback(
        (event) => {
            // Cast event.target to Element to use the closest method.
            const targetElement = event.target as Element;

            if (openGuest && !targetElement.closest(".sub-menu-guest")) {
                setOpenGuest(false);
            }
        },
        [openGuest]
    );

    useEffect(() => {
        // Add a global click event to track clicks outside the popup.
        document.addEventListener("click", handleClickOutsideDatePopup);
        document.addEventListener("click", handleClickOutsideGuestPopup);

        // Cleanup to avoid memory leaks.
        return () => {
            document.removeEventListener("click", handleClickOutsideDatePopup);
            document.removeEventListener("click", handleClickOutsideGuestPopup);
        };
    }, [handleClickOutsideDatePopup, handleClickOutsideGuestPopup]);

    // Increase number
    const increaseGuest = (type: keyof GuestType) => {
        setGuest((prevGuest) => ({
            ...prevGuest,
            [type]: prevGuest[type] + 1,
        }));
    };

    // Decrease number
    const decreaseGuest = (type: keyof GuestType) => {
        if (guest[type] > 0) {
            setGuest((prevGuest) => ({
                ...prevGuest,
                [type]: prevGuest[type] - 1,
            }));
        }
    };

    const [dayStay, setDayStay] = useState<number>(0);

    // Calculate the number of day to stay
    useEffect(() => {
        const diffTime = Math.abs(range[0].endDate.getTime() - range[0].startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDayStay(diffDays);
        console.log(diffDays);
    }, [range]);

    return (
        <div className='sidebar xl:w-1/3 lg:w-[40%] lg:pl-[45px] w-full overflow-visible'>
            <StickyBox offsetTop={20}>
                <div className='reservation bg-surface p-6 rounded-md'>
                    <div className='heading4 text-center'>Reservation</div>
                    <div className='date-sidebar-detail bg-white border border-outline mt-5'>
                        <div className='relative cursor-pointer'>
                            <div
                                className='grid grid-cols-2 border-b border-outline'
                                onClick={handleOpenDate}>
                                <div className='left pl-5 py-4 border-r border-outline'>
                                    <div className='flex items-center gap-1'>
                                        <CalendarBlank className='text-xl' />
                                        <div className='text-button'>Check In</div>
                                    </div>
                                    <div className='body2 mt-1'>
                                        {range[0].startDate.toLocaleDateString("en-GB")}
                                    </div>
                                </div>
                                <div className='left pr-5 py-4'>
                                    <div className='flex items-center justify-end gap-1'>
                                        <CalendarBlank className='text-xl' />
                                        <div className='text-button'>Check Out</div>
                                    </div>
                                    <div className='body2 mt-1 text-end'>
                                        {range[0].endDate.toLocaleDateString("en-GB")}
                                    </div>
                                </div>
                            </div>
                            <DateRangePicker
                                className={`form-date-picker box-shadow ${openDate ? "open" : ""}`}
                                onChange={(item) => setRange([item.selection] as any)}
                                moveRangeOnFirstSelection={false}
                                minDate={new Date()}
                                maxDate={addDays(new Date(), 365)}
                                months={2}
                                ranges={range}
                                direction='horizontal'
                            />
                        </div>
                        <div className='guest px-5 py-4 relative cursor-pointer'>
                            <div
                                className='flex items-center justify-between'
                                onClick={handleOpenGuest}>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <Users className='text-xl' />
                                        <div className='text-button'>Guest</div>
                                    </div>
                                    <div className='body2 mt-1'>
                                        {guest.adult} adults - {guest.children} childrens
                                    </div>
                                </div>
                                <CaretDown className='text-2xl' />
                            </div>
                            <div
                                className={`sub-menu-guest bg-white rounded-b-xl overflow-hidden p-5 absolute top-full -mt-px left-0 w-full box-shadow ${
                                    openGuest ? "open" : ""
                                }`}>
                                <div className='item flex items-center justify-between pb-4 border-b border-outline'>
                                    <div className='left'>
                                        <p>Adults</p>
                                        <div className='caption1 text-variant1'>(12 Years+)</div>
                                    </div>
                                    <div className='right flex items-center gap-5'>
                                        <div
                                            className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${
                                                guest.adult === 0
                                                    ? "opacity-[0.4] cursor-default"
                                                    : "cursor-pointer hover:bg-black hover:text-white"
                                            }`}
                                            onClick={() => decreaseGuest("adult")}>
                                            <Minus weight='bold' />
                                        </div>
                                        <div className='text-title'>{guest.adult}</div>
                                        <div
                                            className='plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white'
                                            onClick={() => increaseGuest("adult")}>
                                            <Plus weight='bold' />
                                        </div>
                                    </div>
                                </div>
                                <div className='item flex items-center justify-between pb-4 pt-4 border-b border-outline'>
                                    <div className='left'>
                                        <p>Children</p>
                                        <div className='caption1 text-variant1'>(2-12 Years)</div>
                                    </div>
                                    <div className='right flex items-center gap-5'>
                                        <div
                                            className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${
                                                guest.children === 0
                                                    ? "opacity-[0.4] cursor-default"
                                                    : "cursor-pointer hover:bg-black hover:text-white"
                                            }`}
                                            onClick={() => decreaseGuest("children")}>
                                            <Minus weight='bold' />
                                        </div>
                                        <div className='text-title'>{guest.children}</div>
                                        <div
                                            className='plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white'
                                            onClick={() => increaseGuest("children")}>
                                            <Plus weight='bold' />
                                        </div>
                                    </div>
                                </div>
                                <div className='item flex items-center justify-between pb-4 pt-4 border-b border-outline'>
                                    <div className='left'>
                                        <p>Infants</p>
                                        <div className='caption1 text-variant1'>(0-2 Years)</div>
                                    </div>
                                    <div className='right flex items-center gap-5'>
                                        <div
                                            className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${
                                                guest.infant === 0
                                                    ? "opacity-[0.4] cursor-default"
                                                    : "cursor-pointer hover:bg-black hover:text-white"
                                            }`}
                                            onClick={() => decreaseGuest("infant")}>
                                            <Minus weight='bold' />
                                        </div>
                                        <div className='text-title'>{guest.infant}</div>
                                        <div
                                            className='plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white'
                                            onClick={() => increaseGuest("infant")}>
                                            <Plus weight='bold' />
                                        </div>
                                    </div>
                                </div>
                                <div className='item flex items-center justify-between pb-4 pt-4'>
                                    <div className='left'>
                                        <p>Pets</p>
                                    </div>
                                    <div className='right flex items-center gap-5'>
                                        <div
                                            className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${
                                                guest.pet === 0
                                                    ? "opacity-[0.4] cursor-default"
                                                    : "cursor-pointer hover:bg-black hover:text-white"
                                            }`}
                                            onClick={() => decreaseGuest("pet")}>
                                            <Minus weight='bold' />
                                        </div>
                                        <div className='text-title'>{guest.pet}</div>
                                        <div
                                            className='plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white'
                                            onClick={() => increaseGuest("pet")}>
                                            <Plus weight='bold' />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='button-main w-full text-center'
                                    onClick={() => setOpenGuest(false)}>
                                    Done
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='services bg-white px-5 py-4 mt-5 border border-outline'>
                        <div className='text-button'>Add Services</div>
                        <div className='list flex flex-col gap-2 mt-3'>
                            {camp.services.map((item, index) => (
                                <div className='flex items-center cursor-pointer' key={index}>
                                    <div className='block-input'>
                                        <input type='checkbox' name={item} id={item} />
                                        <CheckSquare
                                            size={20}
                                            weight='fill'
                                            className='icon-checkbox text-primary'
                                        />
                                    </div>
                                    <label
                                        htmlFor={item}
                                        className='amenities-name capitalize pl-2 cursor-pointer'>
                                        {item}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='price-block mt-5'>
                        <div className='heading6'>Price Summary</div>
                        <div className='list mt-2'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    ${fee.price} x {dayStay} Nights
                                </div>
                                <div className='text-button'>
                                    {dayStay} x ${fee.price}
                                </div>
                            </div>
                            {guest.adult > 0 && (
                                <div className='flex items-center justify-between'>
                                    <div>{guest.adult} adult(s)</div>

                                    <div className='text-button'>
                                        {guest.adult} x ${fee.adult}
                                    </div>
                                </div>
                            )}
                            {guest.children > 0 && (
                                <div className='flex items-center justify-between'>
                                    <div>{guest.children} children(s)</div>

                                    <div className='text-button'>
                                        {guest.children} x ${fee.children}
                                    </div>
                                </div>
                            )}

                            <div className='flex items-center justify-between mt-1'>
                                <div>Cleaning Fee</div>
                                <div className='text-button'>${fee.cleaning}</div>
                            </div>
                            <div className='flex items-center justify-between mt-1'>
                                <div>Services Fee</div>
                                <div className='text-button'>${fee.service}</div>
                            </div>
                        </div>
                        <div className='total-block mt-5 pt-5 border-t border-outline flex items-center justify-between'>
                            <div className='heading6'>Total:</div>
                            <div className='heading5'>
                                $
                                {dayStay * fee.price +
                                    guest.adult * fee.adult +
                                    guest.children * fee.children +
                                    fee.cleaning +
                                    fee.service}
                            </div>
                        </div>
                        <Button type='button' title='Book Camp' variant='btn_green mt-5' full />
                    </div>
                </div>

                <div className='reservation bg-surface p-6 rounded-md md:mt-10 mt-6'>
                    <div className='bg-img relative'>
                        <iframe
                            className='w-full lg:h-[200px] sm:h-[350px] h-[300px]'
                            src={`https://maps.google.com/maps?q=${camp.locationMap.lat}, ${camp.locationMap.lng}&z=14&output=embed`}></iframe>
                    </div>
                    <div className='heading6 mt-5'>{camp.name}</div>
                    <div className='flex items-center gap-2 mt-2'>
                        <MapPin className='text-variant1' />
                        <span>{camp.location}</span>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <Envelope className='text-variant1' />
                        <span>hi.avitex@gmail.com</span>
                    </div>
                </div>

                <div className='reservation bg-surface p-6 rounded-md md:mt-10 mt-6'>
                    <div className='heading6 mt-5'>Property Hightlishts</div>
                    <div className='text-title mt-4'>Breakfast Info</div>
                    <div className='text-variant1 mt-1'>Continental, Breakfast to go</div>
                    <div className='heading6 mt-4'>Rooms with:</div>
                    <div className='list mt-1'>
                        <div className='flex items-center gap-2'>
                            <UsersThree className='text-xl' />
                            <div>
                                Front desk <span className='text-variant1'>(24-hour)</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <Person className='text-xl' />
                            <div>Concierge</div>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <CurrencyCircleDollar className='text-xl' />
                            <div>Currency exchange</div>
                        </div>
                    </div>
                </div>

                <div className='reservation bg-surface p-6 rounded-md md:mt-10 mt-6'>
                    <div className='heading6 mt-5'>Why Book With Us?</div>
                    <div className='list mt-4'>
                        <div className='flex items-center gap-2'>
                            <Lock className='text-xl' />
                            <div>Secure Booking</div>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <CoinVertical className='text-xl' />
                            <div>Best Price Guarantee</div>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <HandPointing className='text-xl' />
                            <div>Easy Booking Process</div>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <PhoneCall className='text-xl' />
                            <div>Available Support 24/7</div>
                        </div>
                    </div>
                </div>
            </StickyBox>
        </div>
    );
};

export default CampSidebar;
