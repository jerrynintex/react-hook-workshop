import React, { useContext, useMemo } from "react";
import { values } from 'lodash';

function connectWithContext(
    mapStateToProps,
    mapDispatchToProps,
    context
) {
    return (WrapperComponent) => {
        function EnhancedComponent(ownProps) {
            const { state, dispatch } = useContext(context);

            const isMapStateIncludeOwnProps = mapStateToProps?.length === 2;
            const mapStateDependencies = isMapStateIncludeOwnProps ? [state, ...Object.entries(ownProps)] : [state];
            const { ...statePointers } = useMemo(() => mapStateToProps != null
                ? (mapStateToProps.length === 1
                    ? (mapStateToProps)?.(state)
                    : (mapStateToProps)?.(state, ownProps))
                : {}, mapStateDependencies);

            const isMapDispatchIncludeOwnProps = mapDispatchToProps?.length === 2;
            const mapDispatchDependencies = isMapDispatchIncludeOwnProps ? [dispatch, ...Object.entries(ownProps)] : [dispatch];
            const { ...dispatchPointers } = useMemo(() => mapDispatchToProps != null
                ? (mapDispatchToProps.length === 1
                    ? (mapDispatchToProps)?.(dispatch)
                    : (mapDispatchToProps)?.(dispatch, ownProps))
                : {}, mapDispatchDependencies);

            return useMemo(
                () => (
                    <WrapperComponent {...ownProps} {...statePointers} {...dispatchPointers} />
                ),
                [
                    ...values(statePointers),
                    ...values(ownProps),
                    ...values(dispatchPointers)
                ]
            );
        }
        EnhancedComponent.displayName = `connectedWithContext(${WrapperComponent.displayName || WrapperComponent.name})`;
        return EnhancedComponent;
    };
}

export default connectWithContext;