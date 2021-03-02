import React from 'react';
import { CompositeFeature } from '../../types';
import cx from "classnames";
import { BaseFeatureProps } from '../features/base';
import DeviceFooter from './DeviceFooter';

import styles from './DashboardDevice.scss';

import { Link } from 'react-router-dom';
import { genDeviceDetailsLink } from '../../utils';

import Composite from '../features/composite/composite';
import DeviceImage from '../device-image';

type Props = BaseFeatureProps<CompositeFeature>;


const DashboardDevice: React.FC<Props> = ({ onChange, onRead, device, deviceState, feature: { features }, featureWrapperClass }) => {
    return (
        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 d-flex">
            <div className={`flex-fill card flex-shrink-1`}>
                <div className="card-header text-truncate pb-0">
                    <Link to={genDeviceDetailsLink(device.ieee_address)}><DeviceImage device={device} className={cx(styles.deviceImage, 'me-1')} /> {device.friendly_name}</Link>
                </div>
                <div className={`align-items-center card-body row`}>
                    <div className="col">
                        <Composite feature={{ features } as CompositeFeature}
                            type="composite"
                            device={device}
                            deviceState={deviceState}
                            onChange={onChange}
                            onRead={onRead}
                            featureWrapperClass={featureWrapperClass}
                            minimal={true}
                        />
                    </div>
                </div>
                <DeviceFooter
                    device={device}
                    deviceState={deviceState}
                />
            </div>
        </div>
    );
};

export default DashboardDevice;
