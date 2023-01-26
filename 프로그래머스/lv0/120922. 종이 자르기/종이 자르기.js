function solution(M, N) {
    return N*M - 1;
}

// (M-1) + (N-1)*M = M-1+N*M-M = N*M-1
// (N-1) + N*(M-1) = N-1+N*M-N = N*M-1