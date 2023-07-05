import React, { useState } from 'react';
import useFetch from 'hooks/useFetch';
import Button from 'components/button';
import DialogHeader from 'components/dialog-header';
import { MO_ENDPOINTS } from 'utils/endpoints';

export default function ContactWidget({ onClose }) {
    const [query, setQuery] = useState({
        email: '',
        reason: '',
        queryMessage: '',
    });

    const { loading, data, error, start } = useFetch();

    const onChange = (e) => {
        const { name, value } = e.target;
        setQuery((prevState) => ({ ...prevState, [name]: value }));
    };

    const onSubmit = () => {
        start(
            MO_ENDPOINTS.CONTACT_US,
            'POST',
            {
                email: query.email,
                ccEmail: '',
                phone: '',
                query: `<b>[${query.reason}]</b> <br>${query.queryMessage}<br><br>Page_URL: https://plugins.miniorange.com/`,
            },
            null
        );
    };

    return (
        <>
            <DialogHeader title='Contact us' onClose={onClose} />
            <div className='w-full flex flex-col gap-rg p-rg'>
                <input
                    name='email'
                    className='input'
                    placeholder='Enter your email'
                    value={query.email}
                    onChange={onChange}
                />
                <select
                    name='reason'
                    className='input border-r-[16px] border-transparent'
                    value={query.reason}
                    onChange={onChange}
                >
                    <option className='Select-placeholder' value='' disabled={true}>
                        Select Category
                    </option>
                    <option value='Product Questions'>I need Technical Support</option>
                    <option value='Schedule a Demo'>I want to schedule a Demo</option>
                    <option value='Sales Enquiry'>I have a Sales Enquiry</option>
                    <option value='Custom Requirement'>I have custom requirement</option>
                    <option value='Others'>My reason is not listed here </option>
                </select>

                <textarea
                    name='queryMessage'
                    className='textarea h-[128px]'
                    placeholder='Type your message here'
                    value={query.queryMessage}
                    onChange={onChange}
                />
                <Button
                    text='Submit'
                    status={{ loading, success: data, error }}
                    loadingText='Submitting'
                    successText='Query Submitted'
                    errorText='Try Again'
                    onClick={onSubmit}
                />
            </div>
        </>
    );
}
