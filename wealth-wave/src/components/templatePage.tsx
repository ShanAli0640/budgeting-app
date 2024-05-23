import React from 'react';
import Layout from './Layout/index';

interface TemplatePageProps {
    title: string;
}

export default function TemplatePage({ title }: TemplatePageProps): JSX.Element {
    return (
        <Layout>
            <div className="min-h-screen flex flex-col">
                <div className="m-auto">
                    <h1 className="text-4xl">{title}</h1>
                </div>
            </div>
        </Layout>
    );
}
