import {useEffect, useState} from 'react'
import Sidebar from '../components/SIdebar'
import { useSelector, useDispatch } from 'react-redux'
import { changeLoadingToTrue, fetchTags } from '../store/middleware/thunk'
import TagTable from '../components/TagTable'
import ClockLoader from "react-spinners/ClockLoader";
import Toastify from 'toastify-js'

const Tags = () => {
    const {tags} = useSelector( (state) => state.tagReducer)
    const {loading} = useSelector( (state) => state.loadingReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeLoadingToTrue())
        dispatch(fetchTags())
    }, [])

    return (
        <div className='mt-5'>

            { loading 
                ?
                <div className='mt-48'>
                    <ClockLoader
                    className='mx-auto'
                    color="#F37A24"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                </div>
                :
                <>
                <div className="overflow-x-auto p-5 w-full">
                    <table className="table w-full">
                        {/*  head */ }
                        <thead className=''>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Related Post</th>
                            </tr>
                        </thead>
                        <TagTable  tags={tags} />
                    </table>
                </div>
                </>
            }
        </div>




    )


}

export default Tags