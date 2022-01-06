import React from 'react'
import Link from 'next/link'

export default function SearchResultCard({ uuid, name, location, rating }) {
    return (

        <div className="card col-md-3 my-2 institution-card" style={{
            width: '55rem',
            flexDirection: 'row',
            border: '1px solid #dfdfdf'
        }}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAANlBMVEXMzMyTk5PPz8+VlZWjo6OdnZ3Ly8vFxcWYmJjIyMiRkZHBwcG1tbWgoKCurq6xsbGoqKi7u7upjM0CAAAEBElEQVR4nO3Y25KcIBCAYaFV8Kzv/7LpBkG3NpkktTmMVf93sTvOKDU0TQPTNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4E/y/sdXv9rEl1v4H/xNuh7m7ejrp9M8T7/eRnO1UPt/zHN4RDD82l4Gvd7EORen/OX7Vi/Gtn/dxlCeX+0pf1gLcuQWQqcXbn1CLHzrpBo0Ek7iIuJC+rAT13Ui3eueTGN+3LXeImEtRBlTMg369qKtPCEWfu8Kkb4ZnOya4Z0s1qvZBtdGeX7Zk8PF3MKut/Uibe+HRTprvZWos2N1ObRvrs7zVjvsV2cZ4KecFl0aTXvzZQvzeNRaYeGzNwdxh/51ziaKX9z+gLQ4aX8svbucAPrdN98Ep1OmSd2qgxpCfjmEUCqIX8ersmpEc8XYtfcaly6XDxf/VUe+ro9Oux3OTNaSsdSOWGDKDPHtaPfpW2PNFO39Lf2dS3Gx3vsSl6Yf5QkzJNGRtS89ldGzYUwDmz7cr/zWOmivj7PH6eNO+rqSlkxqgpWezmaJ3RLPFw8wjLFPE/0ca+tRniXNmSPnjfpac0B7f01+L3HYY9zTAqwxzBPHZpWmWg6Ypsf2kGKh454KZO2zriTBn4WjqTPF9FGjcLhxqA/3LkbbSaQmjlpixU19KTJn+08wSEprXSvac2+lY19DYUN95YDNjXjvmWaQrMemW4n5qi+aK+7QBSRH7D7F3ptmQ/qmVygaC0V0x+dQ2OSIEm8b0ENropWKRd99fCiac05rSNoyQdwPJojWVvm45xqmfMZIm4inT5Ay6trnJb8TrFbUsvkxFD7a4vCZ3r9eO4g+h6KWzWeE4krf2hFdVfs6lDpvbult+0n53nqQmgku1sV0uBbT7id797chZdUP5+ROeVDXk5oeWZRO5FpA6u8ROXRlw6GnMn+tobdtyFubXO3ZuRXKvZrOPULdHqSPNh33eNtW9J2cs8CGvuxMUwWuwSwtvbvzDJZe7rlu5sNUn5cQO3ZfHdGPNk2aa6+dSoT9Dzb0tbFoIdEgh9zs8oj54burpk2js1Omnq3zkTQO3g/3XYTfxcpJPsXnd2aXFlM92VsQdB3ZvB1xLXze7kvH/Gfsu4fbAUHHT/ZtOb+67izjun5YMHTodbRtn3V1Tm/Y51XycmFBaK2FNE80LbptF2n/XXe+Ioy3Q3a/2A9wpdpN9tuck1vJW8a0xmgmXcfukO6qv+Ht6Wov67DpHlEptCfzfLvyc7vsU8n+fl2W9bZaDPMxlYdux259pp3LL7v+0BaOchF2/eivffe/q563v3P16pmPD/1uCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAz74BL10cy075e7sAAAAASUVORK5CYII="
                className="card-img-top"
                style={{ flex: 0, borderTopRightRadius: 0 }}
            />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{location}</p>

                {/* Star diye - like fashionista */}
                <p>{`(${rating})`}</p>

                <Link href={`/institution/${uuid}/`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>

    )
}
