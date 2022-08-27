<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;

class CreateController extends Controller
{
    function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        User::create($data);
        //insert тоже не видит
        return response([]);
    }
}
