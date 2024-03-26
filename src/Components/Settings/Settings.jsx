import { Card, Input, List, ListItem } from '@material-tailwind/react'
import React, { useState } from 'react'
import { IoMdSettings } from 'react-icons/io'
import {ToastSuccess,ToastError} from '../Toast/Toast'
// Useformic
import { useFormik } from 'formik';
import { ResetpasswordSchema } from '../../Formik/Validations'
import { ResetPassword } from '../../Service/Services';
import { useSelector } from 'react-redux';

function Settings() {
  const [SelectOption, setSelectOption] = useState('password-reset')
  const { UserInfo } = useSelector((state) => state.user);


  const initialValues = {
    old_password: "",
    new_password: "",
    user_id : UserInfo.id,
  }
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ResetpasswordSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmitForm(values, setSubmitting);
    },
  });
  const handleSubmitForm = async (values, setSubmitting) => {
    try {
      const res = await ResetPassword(values)
      if (res?.status === 200) {
        ToastSuccess(res?.data.message || 'Password updated');
      }
    } catch (error) {
      ToastError(error.response?.data.message || '');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Card className='m-5 p-5 bg-gray-300 gap-6  '>
      <IoMdSettings className='w-10 h-10 ' />
      <div className='mx-auto container gap-7 flex justify-center items-center -mt-16 h-full'>
        <Card className=' w-2/5'>
          <List className='capitalize text-gray-800'>
            <div className='h-12 flex justify-center items-center hover:bg-gray-200 hover:rounded-lg cursor-pointer'
              onClick={() => setSelectOption('password-reset')}>
              <p>Reset your password</p>
            </div>
            <div className='h-12 flex justify-center items-center hover:bg-gray-200 hover:rounded-lg cursor-pointer'
              onClick={() => setSelectOption('two-step-verifications')}>
              <p>Two Step verification</p>
            </div>
            <div className='h-12 flex justify-center items-center hover:bg-gray-200 hover:rounded-lg cursor-pointer'
              onClick={() => setSelectOption('terms&conditions')}>
              <p>Terms & Conditions</p>
            </div>
            <div className='h-12 flex justify-center items-center hover:bg-gray-200 hover:rounded-lg cursor-pointer'
              onClick={() => setSelectOption('reports')}>
              <p>Reports</p>
            </div>

          </List>
        </Card>
        {SelectOption === 'password-reset' ? (
          <Card className='h-3/4 w-full p-5'>
            <p className='font-bold text-black text-3xl pt-5 pb-5'>Change Your Password</p>
            <p className='text-sm'>Please ensure your new password contains a combination of letters, numbers, and symbols for enhanced security.</p>
            <p className='text-sm'>Your password should include a mix of alphabetic characters, numbers, and special symbols to meet our security requirements and help protect your account.</p>

             <div className='mx-20 mt-20'>
            <form onSubmit={handleSubmit}>
            <div className='my-2'>
                <Input
                autoFocus={true}
                  variant="standard"
                  label="Old Password"
                  name='old_password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.old_password}
                />
                {touched.old_password && errors.old_password && (
                  <div className="text-red-500 text-sm ">{errors.old_password}</div>
                )}
              </div>
              <div className='my-2'>
                <Input
                  variant="standard"
                  label="New password"
                  name='new_password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.new_password}
                />
                {touched.new_password && errors.new_password && (
                  <div className="text-red-500 text-sm ">{errors.new_password}</div>
                )}
              </div>
              <button type='submit' className='bg-black w-full py-2 rounded-lg text-white mt-5'>Update Your Password</button>
            </form>
             </div>
             
          </Card>) : SelectOption === 'two-step-verifications' ? (<Card className='h-3/4 w-full'>
            Two step verification
          </Card>) : SelectOption === 'terms&conditions' ? (<Card className='h-3/4 w-full'>
            Tearms
          </Card>) : SelectOption === 'reports' ?
          (<Card className='h-3/4 w-full'>
            Res
          </Card>) : ""}
      </div>

    </Card>
  )
}

export default Settings